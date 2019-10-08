import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { SetReq } from "./types/set-req";

export module Identity {
  export function get(sdk: CosmosSDK, address: string) {
    return sdk.get<{ [key: string]: string }>(`/identity/accounts/${address}`);
  }

  export function set(
    sdk: CosmosSDK,
    address: string,
    params: SetReq
  ) {
    return sdk.put<StdTx>(`/identity/accounts/${address}`, params);
  }
}
