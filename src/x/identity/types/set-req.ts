import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

export interface SetReq {
  base_req: BaseReq;
  value: string;
  key: string;
}
