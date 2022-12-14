/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { Grant, GrantInterface } from "../../contracts/Grant";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_grantId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "ClaimGrant",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Fund",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "RemoveFund",
    type: "event",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
    name: "blockTs",
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
    name: "claimGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "fundGrant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "funderAmount",
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
    name: "grant",
    outputs: [
      {
        internalType: "uint256",
        name: "grantId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "timestamp",
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
  {
    inputs: [],
    name: "recipient",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "removeFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockTime",
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
    name: "unlocked",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051610b4e380380610b4e83398101604081905261002f916100c6565b600180546001600160a01b039384166001600160a01b03199182168117909255600080549785169782169790971790965560408051608081018252868152949093166020850181905292840181905260609093018190526002939093556003805485169091179055600480549093161790915560055561011c565b80516001600160a01b03811681146100c157600080fd5b919050565b600080600080600060a086880312156100dd578081fd5b6100e6866100aa565b9450602086015193506100fb604087016100aa565b9250610109606087016100aa565b9150608086015190509295509295909350565b610a238061012b6000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806366d003ac1161007157806366d003ac146101345780636a5e26501461013c578063ac27e06e14610151578063af5e73a414610159578063b69ef8a81461016c578063f30c0e0814610174576100b4565b8063251c1aa3146100b957806330c3eaa8146100d75780633af388e0146100ef5780633f21185814610104578063451c3d80146101175780635d22e77c1461012c575b600080fd5b6100c161017c565b6040516100ce919061097a565b60405180910390f35b6100df610182565b6040516100ce9493929190610983565b6101026100fd3660046107a3565b6101a1565b005b6101026101123660046107a3565b6102e3565b61011f6103e4565b6040516100ce91906107d3565b6101026103f3565b61011f61069b565b6101446106aa565b6040516100ce9190610824565b6100c16106b3565b6100c1610167366004610755565b6106b7565b6100c16106c9565b6100c161074f565b60055490565b6002546003546004546005546001600160a01b03928316929091169084565b336000908152600660205260409020548111156101d95760405162461bcd60e51b81526004016101d09061090c565b60405180910390fd5b6101e16106aa565b156101fe5760405162461bcd60e51b81526004016101d0906108d5565b336000908152600660205260408120805483929061021d9084906109c0565b909155505060015460405163a9059cbb60e01b81526001600160a01b039091169063a9059cbb90610254903390859060040161080b565b602060405180830381600087803b15801561026e57600080fd5b505af1158015610282573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a69190610783565b507f0e31f6229e6d14557a66e8bf401a6aa9940fe5ceaa1b64d9b566629a2219083933826040516102d892919061080b565b60405180910390a150565b6102eb6106aa565b156103085760405162461bcd60e51b81526004016101d09061085b565b33600090815260066020526040812080548392906103279084906109a8565b90915550506001546040516323b872dd60e01b81526001600160a01b03909116906323b872dd90610360903390309086906004016107e7565b602060405180830381600087803b15801561037a57600080fd5b505af115801561038e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103b29190610783565b507fda8220a878ff7a89474ccffdaa31ea1ed1ffbb0207d5051afccc4fbaf81f9bcd33826040516102d892919061080b565b6004546001600160a01b031690565b6103fb6106aa565b6104175760405162461bcd60e51b81526004016101d090610892565b6003546001600160a01b031633146104415760405162461bcd60e51b81526004016101d090610943565b6001546040516370a0823160e01b81526000916001600160a01b0316906370a08231906104729030906004016107d3565b60206040518083038186803b15801561048a57600080fd5b505afa15801561049e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104c291906107bb565b116104df5760405162461bcd60e51b81526004016101d09061082f565b6001546003546040516370a0823160e01b81526001600160a01b039283169263a9059cbb92169083906370a082319061051c9030906004016107d3565b60206040518083038186803b15801561053457600080fd5b505afa158015610548573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061056c91906107bb565b6040518363ffffffff1660e01b815260040161058992919061080b565b602060405180830381600087803b1580156105a357600080fd5b505af11580156105b7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105db9190610783565b506003546001546040516370a0823160e01b81527f922d5502f74416c771a5c8c5ec7ce90fd763844aafffe40019f80da5b7b62580926001600160a01b039081169216906370a08231906106339030906004016107d3565b60206040518083038186803b15801561064b57600080fd5b505afa15801561065f573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061068391906107bb565b60405161069192919061080b565b60405180910390a1565b6003546001600160a01b031690565b60055442101590565b4290565b60066020526000908152604090205481565b6001546040516370a0823160e01b81526000916001600160a01b0316906370a08231906106fa9030906004016107d3565b60206040518083038186803b15801561071257600080fd5b505afa158015610726573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061074a91906107bb565b905090565b60025490565b600060208284031215610766578081fd5b81356001600160a01b038116811461077c578182fd5b9392505050565b600060208284031215610794578081fd5b8151801515811461077c578182fd5b6000602082840312156107b4578081fd5b5035919050565b6000602082840312156107cc578081fd5b5051919050565b6001600160a01b0391909116815260200190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b03929092168252602082015260400190565b901515815260200190565b6020808252601290820152714e6f20746f6b656e7320746f20636c61696d60701b604082015260600190565b6020808252601c908201527f6772616e742066756e64696e6720706572696f64206973206f76657200000000604082015260600190565b60208082526023908201527f6772616e7420636c61696d20706572696f64206e6f742079657420657863656560408201526219195960ea1b606082015260800190565b60208082526019908201527f63616e6e6f742077697468647261772066756e6473206e6f7700000000000000604082015260600190565b6020808252601e908201527f6e6f7420656e6f7567682062616c616e636520746f2077697468647261770000604082015260600190565b60208082526019908201527f796f7520617265206e6f742074686520726563697069656e7400000000000000604082015260600190565b90815260200190565b9384526001600160a01b03928316602085015291166040830152606082015260800190565b600082198211156109bb576109bb6109d7565b500190565b6000828210156109d2576109d26109d7565b500390565b634e487b7160e01b600052601160045260246000fdfea2646970667358221220554cfcb699b33dbb3cfc7a2c1095109a27b1ca8d0b18fdcfcbb843b17c8a9bb064736f6c63430008000033";

type GrantConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: GrantConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Grant__factory extends ContractFactory {
  constructor(...args: GrantConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _owner: PromiseOrValue<string>,
    _grantId: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<Grant> {
    return super.deploy(
      _owner,
      _grantId,
      _recipient,
      _tokenAddress,
      _timestamp,
      overrides || {}
    ) as Promise<Grant>;
  }
  override getDeployTransaction(
    _owner: PromiseOrValue<string>,
    _grantId: PromiseOrValue<BigNumberish>,
    _recipient: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _owner,
      _grantId,
      _recipient,
      _tokenAddress,
      _timestamp,
      overrides || {}
    );
  }
  override attach(address: string): Grant {
    return super.attach(address) as Grant;
  }
  override connect(signer: Signer): Grant__factory {
    return super.connect(signer) as Grant__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): GrantInterface {
    return new utils.Interface(_abi) as GrantInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): Grant {
    return new Contract(address, _abi, signerOrProvider) as Grant;
  }
}
