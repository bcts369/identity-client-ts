import { BaseReq } from "cosmos-client-ts/lib/types/cosmos-sdk/rest";

export interface ImportReq {
  base_req: BaseReq;
  from_address: string;
}