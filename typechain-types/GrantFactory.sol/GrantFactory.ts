/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface GrantFactoryInterface extends utils.Interface {
  functions: {
    "createGrant(address,address,uint256)": FunctionFragment;
    "getGrantAddress(uint256)": FunctionFragment;
    "getGrantsForRecipient(address)": FunctionFragment;
    "grantId()": FunctionFragment;
    "grants(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createGrant"
      | "getGrantAddress"
      | "getGrantsForRecipient"
      | "grantId"
      | "grants"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "createGrant",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getGrantAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getGrantsForRecipient",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "grantId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "grants",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "createGrant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGrantAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGrantsForRecipient",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grantId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grants", data: BytesLike): Result;

  events: {
    "CreateGrant(uint256,address,address,address,uint256,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "CreateGrant"): EventFragment;
}

export interface CreateGrantEventObject {
  grantId: BigNumber;
  grantAddress: string;
  recipient: string;
  tokenAddress: string;
  timestamp: BigNumber;
  grantCreator: string;
}
export type CreateGrantEvent = TypedEvent<
  [BigNumber, string, string, string, BigNumber, string],
  CreateGrantEventObject
>;

export type CreateGrantEventFilter = TypedEventFilter<CreateGrantEvent>;

export interface GrantFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GrantFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    createGrant(
      _recipient: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getGrantAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getGrantsForRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    grantId(overrides?: CallOverrides): Promise<[BigNumber]>;

    grants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        grantId: BigNumber;
        grantAddress: string;
        recipient: string;
        tokenAddress: string;
        timestamp: BigNumber;
      }
    >;
  };

  createGrant(
    _recipient: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getGrantAddress(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  getGrantsForRecipient(
    recipient: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  grantId(overrides?: CallOverrides): Promise<BigNumber>;

  grants(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, string, BigNumber] & {
      grantId: BigNumber;
      grantAddress: string;
      recipient: string;
      tokenAddress: string;
      timestamp: BigNumber;
    }
  >;

  callStatic: {
    createGrant(
      _recipient: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getGrantAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    getGrantsForRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    grantId(overrides?: CallOverrides): Promise<BigNumber>;

    grants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, string, BigNumber] & {
        grantId: BigNumber;
        grantAddress: string;
        recipient: string;
        tokenAddress: string;
        timestamp: BigNumber;
      }
    >;
  };

  filters: {
    "CreateGrant(uint256,address,address,address,uint256,address)"(
      grantId?: null,
      grantAddress?: null,
      recipient?: null,
      tokenAddress?: null,
      timestamp?: null,
      grantCreator?: null
    ): CreateGrantEventFilter;
    CreateGrant(
      grantId?: null,
      grantAddress?: null,
      recipient?: null,
      tokenAddress?: null,
      timestamp?: null,
      grantCreator?: null
    ): CreateGrantEventFilter;
  };

  estimateGas: {
    createGrant(
      _recipient: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getGrantAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getGrantsForRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantId(overrides?: CallOverrides): Promise<BigNumber>;

    grants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    createGrant(
      _recipient: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getGrantAddress(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getGrantsForRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
