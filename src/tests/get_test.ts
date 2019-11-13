import { CosmosSDK } from 'cosmos-client-ts';
import { Identity } from './../x/identity';


const url: string = "http://133.130.77.80:1317";
const chainId: string = "t";
const sdk = new CosmosSDK(url, chainId);
const address: string = "cosmos15g0309kcs0nfed829cwyc07s6ydpaalel6676h";

async function getIdentity() {
    try {
        let result = await Identity.get(sdk, address)

        console.log(result)
    } catch (error) {
        console.error("*** Error:", error);
    }
}

getIdentity();


// 次の記述でもOK（set、import、removeでも同様）

Identity.get(sdk, address).then((result) => {
    console.log(result);
}).catch((e) => {
    console.error("エラー内容:", e);
});
