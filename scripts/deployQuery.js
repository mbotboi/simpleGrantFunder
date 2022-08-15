const { ethers } = require('hardhat')
const provider = ethers.provider;
const deployerKey = require('../sensitive').deployerKey

async function main() {
    const deployer = new ethers.Wallet(deployerKey, provider)
    console.log(deployer.address)
    const Query = await ethers.getContractFactory("GrantsQuery", { signer: deployer })
    // console.log(GrantFactory)

      const gf = await Query.deploy("0xAb1fC6b1E5fa0a8af497e6eCDE33fb6B2973a381") //grantFactory
      console.log(`deployed at ${gf.address}`)
}
main()
