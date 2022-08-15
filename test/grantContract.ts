import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import hre from "hardhat";
import { MockProvider } from "ethereum-waffle";
import { ERC20 } from "../typechain/ERC20";
import { ERC20__factory } from "../typechain/factories/ERC20__factory";
import { Grant__factory } from "../typechain-types/factories/Grant__factory";
import { GrantFactory__factory } from "../typechain-types/factories/GrantFactory__factory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

const { provider } = waffle;
let token: ERC20
let signers: SignerWithAddress[];
let deployer: SignerWithAddress;
let gf: any;
let grant: any;
const currDate = new Date();
const currTs = Date.now() / 1000 | 0;
const ts = currDate.setMonth(currDate.getMonth() + 1) / 1000 | 0;

async function increaseBlockTimestamp(provider: MockProvider, time: number) {
    await provider.send("evm_increaseTime", [time]);
    await provider.send("evm_mine", []);
};

async function reset() {
    await hre.network.provider.request({
        method: "hardhat_reset",
        params: [],
    });
}
beforeEach(async () => {
    await reset()
    signers = await ethers.getSigners();
    deployer = signers[0]

    const erc20 = new ERC20__factory(deployer);
    token = await erc20.deploy("token", "TKN");
    await token.mint(deployer.address, ethers.utils.parseEther('100'))
    const GrantFactory = new GrantFactory__factory(deployer)
    gf = await GrantFactory.deploy() //grantFactory

    await gf.createGrant(signers[1].address, token.address, ts)

    const Grant = new Grant__factory(deployer);
    grant = Grant.attach(await gf.grants(0))

    await token.mint(signers[1].address, ethers.utils.parseEther('100'))
    await token.approve(grant.address, ethers.constants.MaxUint256)
})

describe("Grant Contract Test", async () => {
    describe("deposit and withdraws", async () => {
        it("allows deposits and accurately stores balances", async () => {
            await grant.fundGrant(ethers.utils.parseEther('1'))
            expect(await grant.balance()).to.be.eq(ethers.utils.parseEther('1'))
            expect(await token.balanceOf(deployer.address)).to.be.eq(ethers.utils.parseEther('99'))
            expect(await grant.funderAmount(deployer.address)).to.be.eq(ethers.utils.parseEther('1'))
        })
        it("allows withdraws after deposit", async () => {
            await grant.fundGrant(ethers.utils.parseEther('1'))
            await grant.removeFund(ethers.utils.parseEther('1'))
            expect(await grant.balance()).to.be.eq(ethers.utils.parseEther('0'))
            expect(await token.balanceOf(deployer.address)).to.be.eq(ethers.utils.parseEther('100'))
            expect(await grant.funderAmount(deployer.address)).to.be.eq(ethers.utils.parseEther('0'))
        })

        it("does not allow unauthorised withdrawals", async () => {
            await grant.fundGrant(ethers.utils.parseEther('1')) //deployer deposits 1
            //signer 1 deposits 1
            //total balance is 2
            await token.connect(signers[1]).approve(grant.address, ethers.constants.MaxUint256)
            await grant.connect(signers[1]).fundGrant(ethers.utils.parseEther('1'))

            //person with 0 balance cannot withdraw
            const tx = grant.connect(signers[2]).removeFund(ethers.utils.parseEther('1'))
            await expect(tx).to.be.revertedWith("not enough balance to withdraw")

            //person cannot remove more than their deposited balance
            const tx1 = grant.removeFund(ethers.utils.parseEther('2'))
            await expect(tx1).to.be.revertedWith("not enough balance to withdraw")

            //what the fuck is this
            await grant.removeFund(ethers.utils.parseEther('1'))
            const tx2 = grant.removeFund(ethers.utils.parseEther('1'))
            await expect(tx2).to.be.revertedWith("not enough balance to withdraw")
        })
    })
    describe("claims", async () => {
        it("recipient can claim after unlock time", async () => {
            await grant.fundGrant(ethers.utils.parseEther('1'))
            await increaseBlockTimestamp(provider, ts - currTs + 10)
            const g = grant.connect(signers[1])
            await g.claimGrant()

            expect(await grant.balance()).to.be.eq(ethers.utils.parseEther('0'))
            expect(await token.balanceOf(signers[1].address)).to.be.eq(ethers.utils.parseEther('101'))
            expect(await grant.funderAmount(deployer.address)).to.be.eq(ethers.utils.parseEther('1'))
        })


        it("cannot claim funds before unlock", async () => {
            await grant.fundGrant(ethers.utils.parseEther('1'))
            const g = grant.connect(signers[1])
            const tx = g.claimGrant()
            await expect(tx).to.be.revertedWith("grant claim period not yet exceeded")
        })

        it("non-recipients cannot claim funds", async () => {
            await grant.fundGrant(ethers.utils.parseEther('1'))
            await increaseBlockTimestamp(provider, ts - currTs + 10)
            const tx = grant.claimGrant()
            await expect(tx).to.be.revertedWith("you are not the recipient")
        })
    })
    // describe("deposit and withdraws", async () => { })
    // describe("deposit and withdraws", async () => { })





})
