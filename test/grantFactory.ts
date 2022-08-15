import { expect } from "chai";
import { ethers, waffle } from "hardhat";
import { MockProvider } from "ethereum-waffle";
import { ERC20 } from "../typechain/ERC20";
import { ERC20__factory } from "../typechain/factories/ERC20__factory";
import { Grant__factory } from "../typechain-types/factories/Grant__factory";
import { GrantFactory__factory } from "../typechain-types/factories/GrantFactory__factory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

const { provider } = waffle;
// const provider = ethers.provider;
async function increaseBlockTimestamp(provider: MockProvider, time: number) {
    await provider.send("evm_increaseTime", [time]);
    await provider.send("evm_mine", []);
};

let token: ERC20
let signers: SignerWithAddress[];
let deployer: SignerWithAddress;
let gf: any;
const currDate = new Date();
const currTs = Date.now() / 1000 | 0;
const ts = currDate.setMonth(currDate.getMonth() + 1) / 1000 | 0;

beforeEach(async () => {
    signers = await ethers.getSigners();
    deployer = signers[0]

    const erc20 = new ERC20__factory(deployer);
    token = await erc20.deploy("token", "TKN");
    await token.mint(deployer.address, ethers.utils.parseEther('100'))
    const GrantFactory = new GrantFactory__factory(deployer)
    gf = await GrantFactory.deploy() //grantFactory

})

describe("GrantFactory Test", async () => {
    describe("creating new contracts", async () => {
        it("can create a new grant contract", async () => {
            const tx = await gf.createGrant(signers[1].address, token.address, ts)
            const newGrantAddr = await gf.grants(0)
            const newGrant = await gf.getGrantInfo(0)
            expect(await gf.grantId()).to.be.eq(1)
            expect(newGrantAddr).to.be.not.eq(ethers.constants.AddressZero)
            expect(newGrant.grantId).to.be.eq(0)
            expect(newGrant.recipient).to.be.eq(signers[1].address)
            expect(newGrant.tokenAddress).to.be.eq(token.address)
            expect(newGrant.timestamp.toNumber()).to.be.eq(ts)
        })
    })

    describe("getter functions", async () => {
        it("can see all grants for recipient", async () => {

            await gf.createGrant(signers[1].address, token.address, ts)
            await gf.createGrant(signers[1].address, token.address, ts + 100000)
            await gf.createGrant(signers[2].address, token.address, ts + 200000)
            await gf.createGrant(signers[2].address, token.address, ts + 300000)
            await gf.createGrant(signers[1].address, token.address, ts + 400000)

            const recipientsGrants = await gf.getGrantsForRecipient(signers[1].address)
            expect(recipientsGrants.length).to.be.eq(3)
            expect(recipientsGrants[0].toNumber()).to.be.eq(0)
            expect(recipientsGrants[1].toNumber()).to.be.eq(1)
            expect(recipientsGrants[2].toNumber()).to.be.eq(4)
        })

        it("can show all active grants", async () => {
            await gf.createGrant(signers[1].address, token.address, ts)
            await gf.createGrant(signers[1].address, token.address, ts + 100000)
            await gf.createGrant(signers[2].address, token.address, ts + 200000)
            await gf.createGrant(signers[2].address, token.address, ts + 300000)
            await gf.createGrant(signers[1].address, token.address, ts + 400000)

            const activeGrants = await gf.getActiveGrants()
            expect(activeGrants.length).to.be.eq(5)
            expect(activeGrants[0].toNumber()).to.be.eq(0)
            expect(activeGrants[1].toNumber()).to.be.eq(1)

            await increaseBlockTimestamp(provider, ts - currTs + 10000)
            const activeGrants1 = await gf.getActiveGrants()
            expect(activeGrants1.length).to.be.eq(4)
            expect(activeGrants1[0].toNumber()).to.be.eq(1)
            expect(activeGrants1[1].toNumber()).to.be.eq(2)
        })

    })

})