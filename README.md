# Grant Funder Contracts

This is a simple contract I built to demonstrate what I could do with solidity, JS/TS and Hardhat. This contract has a front end and is deployed on 
testnet for anybody that wants to check it out.

Link: **

## Description
- Anybody can create a new grant for a recipient that will be unlocked after a given time
- A factory contract deploys new Grant contracts every time a new grant is created
- The recipient can claim the funds after the deadline has ended
- Funders can pull funds whenever they want before the end of the deadline

### Build

```
1.create a file at root called sensitive.json
2. in /sensitive.json you can fill in the values for deployment
    {
        "rpc":"",
        "deployerKey":"",
        "etherscanApiKey":""
    }
you can fill in the values with your own for deployment, but for testing leaving them blank is enough

npm install
npm run build
```

### Test

```
npm run test
```

### contracts
Factory: https://goerli.etherscan.io/address/0xab1fc6b1e5fa0a8af497e6ecde33fb6b2973a381
Query: https://goerli.etherscan.io/address/0x967265c474561821e7518B13aA447834541b6091