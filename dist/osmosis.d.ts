export declare const OSMOSIS_OUTPOST_CONTRACT = "osmo18rj46qcpr57m3qncrj9cuzm0gn3km08w5jxxlnw002c9y7xex5xsu74ytz";
export declare const NO_OSMOSIS_FALLBACK = "do_nothing";
export declare const UOSMO_DENOM = "uosmo";
export declare const AEVMOS_DENOM = "ibc/6AE98883D4D5D5FF9E50D7130F1305DA2FFA0C652D1DD9C123657C6B4EB2DF8A";
export type OsmosisMemoParams = {
    outputDenom: string;
    slippagePercentage: string;
    windowSeconds: number;
    receiver: string;
    fallbackAddress: string;
};
export declare function GenerateOsmosisMemo(params: OsmosisMemoParams, contract?: string): string;
//# sourceMappingURL=osmosis.d.ts.map