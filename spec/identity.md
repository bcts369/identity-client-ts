# Identity REST API Spec

`cosmos-client-ts`に依存。

```Shell
$ npm i --save cosmos-client-ts
```

## Get

`GET` `/identity/{address}`

### Response

`{ [key: string]: string; }`

Goで言うところの`map[string]string`

## Set

`PUT` `/identity/{address}`

### Response

`StdTx`@`cosmos-client-ts`

## Import

`POST` `/identity/import`

### Response

`StdTx`@`cosmos-client-ts`

## Delete

`POST` `/identity/{address}/delete`

### Response

`StdTx`@`cosmos-client-ts`
