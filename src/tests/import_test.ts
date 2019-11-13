import { CosmosSDK } from 'cosmos-client-ts';
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest'
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'

import { Identity } from './../x/identity';
import { ImportReq } from '../x/identity/types/import-req';

/*
bob's address
cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h

alice's address
cosmos16jzfjpqfnpvx6m25tjnujwngfy5qxhd56rgh3v
*/

const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const bob_address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";

class MyCoin implements Coin {
    denom = "stake";
    amount = "200000";
}

class MyDecCoin implements DecCoin {
    denom = "";
    amount = "0";
}

let defaultValues = (): BaseReq => ({
    from: bob_address,
    memo: "",
    chain_id: chainId,
    account_number: "0",
    sequence: "0",
    fees: [new MyCoin()],
    gas_prices: [new MyDecCoin()],
    gas: "0",
    gas_adjustment: "",
    simulate: false
});

async function importIdentity() {
    const alice_address = "cosmos16jzfjpqfnpvx6m25tjnujwngfy5qxhd56rgh3v"
    const params: ImportReq = {
        from_address: alice_address,
        base_req: defaultValues()
    }
    try {
        const tx = await Identity.post(sdk, alice_address, params)

        console.log("結果:")
        console.log("fee", tx.fee);
        console.log("msg", tx.msg);
        console.log("signature", tx.signatures);
        console.log("memo", tx.memo);
    } catch (error) {
        console.error("*** Error:", error);
    }
}

importIdentity();