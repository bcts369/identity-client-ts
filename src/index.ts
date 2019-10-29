import { CosmosSDK } from 'cosmos-client-ts';
import { Identity } from './x/identity';
import { SetReq } from './x/identity/types/set-req';
import { BaseReq } from 'cosmos-client-ts/lib/types/cosmos-sdk/rest';
import { Coin } from 'cosmos-client-ts/lib/types/cosmos-sdk/coin'
import { DecCoin } from 'cosmos-client-ts/lib/types/cosmos-sdk/deccoin'
// import { StdTx } from 'cosmos-client-ts/lib/x/auth/types/std-tx';

const baseurl: string = "http://133.130.77.80";
const port: string = ":1317";
const url: string = baseurl + port;
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
console.log("初期化:", sdk);

const address: string = "cosmos1hyhwldzwhgt37c284t4armmqdnfudpxmgnf9jx";

Identity.get(sdk, address).then((item) => {
    console.log("get結果", item);
}).catch((e) => {
    console.error("エラー内容:", e);
});

// console.log("---------------------")

// let defaultCoinValue = (): Coin => ({
//     denom: "",
//     amount: BigInt(0)
// });

// var coins: Coin[] = [];
// coins.push(defaultCoinValue())

// let defaultDecCoinValues = (): DecCoin => ({
//     denom: "",
//     amount: BigInt(0)
// });

// var deccoins: DecCoin[] = [];
// coins.push(defaultDecCoinValues())

// var coinarray: Coin[] = [{ denom: "", amount: BigInt(0) }]
// var deccoinarray: DecCoin[] = [{ denom: "", amount: BigInt(0) }]

let defaultValues = (): BaseReq => ({
    from: address,
    memo: '',
    chain_id: chainId,
    account_number: BigInt(0),
    sequence: BigInt(0),
    fees: [{ 'denom': "", 'amount': BigInt(0) }],
    gas_prices: [{ 'denom': "", 'amount': BigInt(0) }],
    gas: '',
    gas_adjustment: '',
    simulate: false
});

let MySetRequest = (): SetReq => ({
    key: "color3",
    value: "blue",
    base_req: defaultValues()
});

// const product = JSON.parse(serverResponse);

console.log(defaultValues());
// console.log(MySetRequest());

const param: SetReq = MySetRequest();

// console.log(param)



Identity.set(sdk, address, param).then((item) => {
    console.log("結果", item);
}).catch((e) => {
    console.error("エラー内容:", e);
});