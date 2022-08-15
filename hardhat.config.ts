import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-etherscan";

import { HardhatUserConfig } from "hardhat/config";
const rpc: string = require('./sensitive.json').rpc
const etherscanKey: string = require('./sensitive.json').etherscanApiKey

const config: HardhatUserConfig = {
  // defaultNetwork: "hardhat",
  networks: {
    goerli: {
      url: rpc
    }
  },
  solidity: {
    compilers: [
      {
        version: "0.8.0",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ]
  },
  mocha: { timeout: 0 },
  etherscan: {
    apiKey: etherscanKey
  }
};

export default config;
