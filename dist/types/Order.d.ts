export type TOrder = {
    is_delivered: boolean;
    name: string;
    price: number;
    section_id: number;
    customer_id: number;
    seating_id: number;
    realm_id: number;
    item: string;
    time: number | string | null;
    datetime: string | null;
    id: number;
};
export declare function isValidOrder(order: any): order is TOrder;
//# sourceMappingURL=Order.d.ts.map