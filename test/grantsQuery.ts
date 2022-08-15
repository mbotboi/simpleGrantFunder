const { ethers } = require('hardhat')
const { expect } = require('chai')
import { ERC20__factory } from "../typechain/factories/ERC20__factory";
import { GrantFactory__factory } from "../typechain-types/factories/GrantFactory__factory";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { Grant__factory } from "../typechain-types/factories/Grant__factory";


describe("grantsQuery Test", async () => {
    let signers: SignerWithAddress[];
    let deployer: SignerWithAddress;
    let gf: any;
    let token: any
    let ts: Number
    let grantAddress: String

    beforeEach(async () => {
        signers = await ethers.getSigners();
        deployer = signers[0]

        const erc20 = new ERC20__factory(deployer);
        token = await erc20.deploy("token", "TKN");
        await token.mint(deployer.address, ethers.utils.parseEther('100'))

        const GrantFactory = new GrantFactory__factory(deployer)
        gf = await GrantFactory.deploy() //grantFactory

        const currDate = new Date();
        ts = currDate.setMonth(currDate.getMonth() + 1) / 1000 | 0;
        await gf.createGrant(signers[1].address, token.address, ts)

        const Grant = new Grant__factory(deployer);
        const grant = Grant.attach(await gf.grants(0))
        await token.approve(grant.address, ethers.constants.MaxUint256)

        grantAddress = grant.address
        await grant.fundGrant(ethers.utils.parseEther('1'))
    })

    describe("query", async () => {
        it("can query all shite", async () => {
            const Query = await ethers.getContractFactory("GrantsQuery")
            const contract = await Query.deploy(gf.address)
            const arr = await contract.getAllGrants()

            const d = arr.map((x: any) => {
                return {
                    grantId: x.grantId.toNumber(),
                    recipient: x.recipient,
                    tokenAddress: x.tokenAddress,
                    balance: Number(ethers.utils.formatEther(x.balance)),
                    unlock: x.timestamp.toNumber(),
                    grantAddress: x.grantAddress
                }
            })
            expect(d.length).not.equal(0)
            const item = d[0]
            expect(item.grantId).to.equal(0)
            expect(item.recipient).equal(signers[1].address)
            expect(item.tokenAddress).equal(token.address)
            expect(item.balance).equal(1)
            expect(item.unlock).equal(ts)
            expect(item.grantAddress).equal(grantAddress)
        })
    })
})