import { TOrder } from "./Order";
export type TSession = {
    id: number;
    waiter: string | null;
    user_id?: number;
    channel: {
        name: number;
        section_name: string;
        section_id: number;
    };
    customers: string[];
    orders: TOrder[];
    price: number;
    amount_paid: number;
    realm_id: number;
    datetime: string;
};
export declare function isValidSession(data: any): boolean;
//# sourceMappingURL=Session.d.ts.map