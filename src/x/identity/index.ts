import { CosmosSDK } from "cosmos-client-ts";
import { StdTx } from "cosmos-client-ts/lib/x/auth/types/std-tx";
import { SetReq } from "./types/set-req";

// refer identity rest.go tx.go

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

  export function post(
    sdk: CosmosSDK,
    address: string,
    params: ImportReq
  ) {
    return sdk.post<StdTx>(`/identity/accounts/${address}/import`, params);
  }

  // delete演算子の `delete` とかぶってしまうので、関数名を `remove` に変更
  export function remove(
    sdk: CosmosSDK,
    address: string,
    params: DeleteReq
  ) {
    return sdk.delete<StdTx>(`/identity/accounts/${address}`, params);
  }
}
