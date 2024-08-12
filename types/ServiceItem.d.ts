export type TServiceItem = {
    id: number;
    name: string;
    price: number;
    minute_interval: number;
    type: string;
    description: string;
    is_available: boolean;
    realm_id: number;
};
export declare function isValidServiceItem(item: any): item is TServiceItem;
//# sourceMappingURL=ServiceItem.d.ts.map