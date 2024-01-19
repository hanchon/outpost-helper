# Outpost helper

## Installation

```ts
npm install @hanchon/outpost-helper
```

## Usage

### Stride

```ts
const sender = "evmos1q4fc7nlx67q3puck6ydury3e4ynvn3qe98khj0";
const receiver = "stride1q4fc7nlx67q3puck6ydury3e4ynvn3qeyd89ut";
const memo = GenerateStrideMemo(sender, receiver);
```

### Osmosis

```ts
const params: OsmosisMemoParams = {
  outputDenom: UOSMO_DENOM,
  slippagePercentage: "5",
  windowSeconds: 20,
  receiver: "evmos1hp2525adxv83t2sqtts6nd0w6dtrrzx56j9mqw",
  fallbackAddress: "osmo1044qatzg4a0wm63jchrfdnn2u8nwdgxxt6e524",
};

GenerateOsmosisMemo(params);
```
