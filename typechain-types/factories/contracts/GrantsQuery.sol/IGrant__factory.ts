/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IGrant,
  IGrantInterface,
} from "../../../contracts/GrantsQuery.sol/IGrant";

const _abi = [
  {
    inputs: [],
    name: "balance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "grantId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class IGrant__factory {
  static readonly abi = _abi;
  static createInterface(): IGrantInterface {
    return new utils.Interface(_abi) as IGrantInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): IGrant {
    return new Contract(address, _abi, signerOrProvider) as IGrant;
  }
}
