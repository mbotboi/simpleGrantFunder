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

export declare namespace GrantFactory {
  export type GrantStructStruct = {
    grantId: PromiseOrValue<BigNumberish>;
    recipient: PromiseOrValue<string>;
    tokenAddress: PromiseOrValue<string>;
    timestamp: PromiseOrValue<BigNumberish>;
  };

  export type GrantStructStructOutput = [
    BigNumber,
    string,
    string,
    BigNumber
  ] & {
    grantId: BigNumber;
    recipient: string;
    tokenAddress: string;
    timestamp: BigNumber;
  };
}

export interface GrantFactoryInterface extends utils.Interface {
  functions: {
    "createGrant(address,address,uint256)": FunctionFragment;
    "getActiveGrants()": FunctionFragment;
    "getGrantInfo(uint256)": FunctionFragment;
    "getGrantsForRecipient(address)": FunctionFragment;
    "grantId()": FunctionFragment;
    "grants(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "createGrant"
      | "getActiveGrants"
      | "getGrantInfo"
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
    functionFragment: "getActiveGrants",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getGrantInfo",
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
    functionFragment: "getActiveGrants",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getGrantInfo",
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

    getActiveGrants(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getGrantInfo(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[GrantFactory.GrantStructStructOutput]>;

    getGrantsForRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    grantId(overrides?: CallOverrides): Promise<[BigNumber]>;

    grants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;
  };

  createGrant(
    _recipient: PromiseOrValue<string>,
    _tokenAddress: PromiseOrValue<string>,
    _timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getActiveGrants(overrides?: CallOverrides): Promise<BigNumber[]>;

  getGrantInfo(
    id: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<GrantFactory.GrantStructStructOutput>;

  getGrantsForRecipient(
    recipient: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  grantId(overrides?: CallOverrides): Promise<BigNumber>;

  grants(
    arg0: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  callStatic: {
    createGrant(
      _recipient: PromiseOrValue<string>,
      _tokenAddress: PromiseOrValue<string>,
      _timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getActiveGrants(overrides?: CallOverrides): Promise<BigNumber[]>;

    getGrantInfo(
      id: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<GrantFactory.GrantStructStructOutput>;

    getGrantsForRecipient(
      recipient: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    grantId(overrides?: CallOverrides): Promise<BigNumber>;

    grants(
      arg0: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;
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

    getActiveGrants(overrides?: CallOverrides): Promise<BigNumber>;

    getGrantInfo(
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

    getActiveGrants(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getGrantInfo(
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
