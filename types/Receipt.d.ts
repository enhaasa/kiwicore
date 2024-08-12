import type { TOrder } from './Order.ts';
import type { TService } from './Service.js';
export type TReceipt = {
    id: number;
    waiter: string | null;
    channel: {
        name: string;
        section_name: string;
        section_id: string | number | null;
    };
    customers: string[];
    orders: TOrder[];
    services: TService[];
    price: number;
    datetime: string;
    amount_paid: number;
    realm_id: number;
    user_id: number;
    link: string;
    name: string;
    address: string;
};
//# sourceMappingURL=Receipt.d.ts.map