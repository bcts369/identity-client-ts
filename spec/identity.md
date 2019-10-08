# Identity REST API Spec

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## Get

`GET` `/identity/accounts/{address}`

### Response

`{ [key: string]: string; }`

Goで言うところの`map[string]string`

## Set

`PUT` `/identity/accounts/{address}`

### Request

```TypeScript
interface SetReq{
  base_req: BaseReq; // cosmos-client-ts
  key: string;
  value: string;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## Import

`POST` `/identity/accounts/{address}/import`

### Request

```TypeScript
interface ImportReq {
  base_req: BaseReq; // cosmos-client-ts
  from_address: string;
}
```

### Response

`StdTx`@`cosmos-client-ts`

## Delete

`DELETE` `/identity/accounts/{address}`

### Request

```TypeScript
interface DeleteReq {
  base_req: BaseReq; // cosmos-client-ts
}
```

### Response

`StdTx`@`cosmos-client-ts`
