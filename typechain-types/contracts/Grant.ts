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

export interface GrantInterface extends utils.Interface {
  functions: {
    "acceptedToken()": FunctionFragment;
    "balance()": FunctionFragment;
    "blockTs()": FunctionFragment;
    "claimGrant()": FunctionFragment;
    "fundGrant(uint256)": FunctionFragment;
    "funderAmount(address)": FunctionFragment;
    "grant()": FunctionFragment;
    "grantId()": FunctionFragment;
    "recipient()": FunctionFragment;
    "removeFund(uint256)": FunctionFragment;
    "unlockTime()": FunctionFragment;
    "unlocked()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "acceptedToken"
      | "balance"
      | "blockTs"
      | "claimGrant"
      | "fundGrant"
      | "funderAmount"
      | "grant"
      | "grantId"
      | "recipient"
      | "removeFund"
      | "unlockTime"
      | "unlocked"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "acceptedToken",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "balance", values?: undefined): string;
  encodeFunctionData(functionFragment: "blockTs", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "claimGrant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "fundGrant",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "funderAmount",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "grant", values?: undefined): string;
  encodeFunctionData(functionFragment: "grantId", values?: undefined): string;
  encodeFunctionData(functionFragment: "recipient", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "removeFund",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockTime",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "unlocked", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "acceptedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "balance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "blockTs", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimGrant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "fundGrant", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "funderAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "grant", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "grantId", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "recipient", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeFund", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlockTime", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlocked", data: BytesLike): Result;

  events: {
    "ClaimGrant(address,uint256)": EventFragment;
    "Fund(address,uint256)": EventFragment;
    "RemoveFund(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ClaimGrant"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Fund"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "RemoveFund"): EventFragment;
}

export interface ClaimGrantEventObject {
  recipient: string;
  amount: BigNumber;
}
export type ClaimGrantEvent = TypedEvent<
  [string, BigNumber],
  ClaimGrantEventObject
>;

export type ClaimGrantEventFilter = TypedEventFilter<ClaimGrantEvent>;

export interface FundEventObject {
  funder: string;
  amount: BigNumber;
}
export type FundEvent = TypedEvent<[string, BigNumber], FundEventObject>;

export type FundEventFilter = TypedEventFilter<FundEvent>;

export interface RemoveFundEventObject {
  funder: string;
  amount: BigNumber;
}
export type RemoveFundEvent = TypedEvent<
  [string, BigNumber],
  RemoveFundEventObject
>;

export type RemoveFundEventFilter = TypedEventFilter<RemoveFundEvent>;

export interface Grant extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: GrantInterface;

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
    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    balance(overrides?: CallOverrides): Promise<[BigNumber]>;

    blockTs(overrides?: CallOverrides): Promise<[BigNumber]>;

    claimGrant(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    fundGrant(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    funderAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grant(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        grantId: BigNumber;
        recipient: string;
        tokenAddress: string;
        timestamp: BigNumber;
      }
    >;

    grantId(overrides?: CallOverrides): Promise<[BigNumber]>;

    recipient(overrides?: CallOverrides): Promise<[string]>;

    removeFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlockTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    unlocked(overrides?: CallOverrides): Promise<[boolean]>;
  };

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  balance(overrides?: CallOverrides): Promise<BigNumber>;

  blockTs(overrides?: CallOverrides): Promise<BigNumber>;

  claimGrant(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  fundGrant(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  funderAmount(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grant(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, string, BigNumber] & {
      grantId: BigNumber;
      recipient: string;
      tokenAddress: string;
      timestamp: BigNumber;
    }
  >;

  grantId(overrides?: CallOverrides): Promise<BigNumber>;

  recipient(overrides?: CallOverrides): Promise<string>;

  removeFund(
    amount: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlockTime(overrides?: CallOverrides): Promise<BigNumber>;

  unlocked(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    acceptedToken(overrides?: CallOverrides): Promise<string>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    blockTs(overrides?: CallOverrides): Promise<BigNumber>;

    claimGrant(overrides?: CallOverrides): Promise<void>;

    fundGrant(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    funderAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grant(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, string, BigNumber] & {
        grantId: BigNumber;
        recipient: string;
        tokenAddress: string;
        timestamp: BigNumber;
      }
    >;

    grantId(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<string>;

    removeFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockTime(overrides?: CallOverrides): Promise<BigNumber>;

    unlocked(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "ClaimGrant(address,uint256)"(
      recipient?: null,
      amount?: null
    ): ClaimGrantEventFilter;
    ClaimGrant(recipient?: null, amount?: null): ClaimGrantEventFilter;

    "Fund(address,uint256)"(funder?: null, amount?: null): FundEventFilter;
    Fund(funder?: null, amount?: null): FundEventFilter;

    "RemoveFund(address,uint256)"(
      funder?: null,
      amount?: null
    ): RemoveFundEventFilter;
    RemoveFund(funder?: null, amount?: null): RemoveFundEventFilter;
  };

  estimateGas: {
    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    balance(overrides?: CallOverrides): Promise<BigNumber>;

    blockTs(overrides?: CallOverrides): Promise<BigNumber>;

    claimGrant(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    fundGrant(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    funderAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grant(overrides?: CallOverrides): Promise<BigNumber>;

    grantId(overrides?: CallOverrides): Promise<BigNumber>;

    recipient(overrides?: CallOverrides): Promise<BigNumber>;

    removeFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlockTime(overrides?: CallOverrides): Promise<BigNumber>;

    unlocked(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    balance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    blockTs(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    claimGrant(
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    fundGrant(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    funderAmount(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grant(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    grantId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recipient(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    removeFund(
      amount: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlockTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    unlocked(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
