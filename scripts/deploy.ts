
import { ethers } from "hardhat";
import { GrantFactory__factory } from "../typechain-types/factories/GrantFactory__factory";

const provider = ethers.provider;
const deployerKey = require('../sensitive').deployerKey


async function main() {
  const deployer = new ethers.Wallet(deployerKey, provider)
  console.log(deployer.address)
  const GrantFactory = new GrantFactory__factory(deployer)
  console.log(GrantFactory)
  // const gf = await GrantFactory.deploy() //grantFactory
  // console.log(`deployed at ${gf.address}`)
}
main()


/**
 * TODO
 * Launch contract
 * verify contract
 * copy ABI to front end
 * connect website with contract and populate contract
 */