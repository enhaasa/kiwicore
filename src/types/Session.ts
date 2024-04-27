import { TOrder } from "./Order";
import { TCustomer } from "./Customer";

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
}

export function isValidSession(data: any): boolean {
    try {
        const isChannelValid = 
            data.channel &&
            typeof data.channel.name === 'number' &&
            typeof data.channel.section_name === 'string' &&
            typeof data.channel.section_id === 'number';

        const areCustomersValid = 
            Array.isArray(data.customers) &&
            data.customers.every((customer: TCustomer) => typeof customer === 'string');

        const areOrdersValid = Array.isArray(data.orders); 

        return (
            typeof data.id === 'number' &&
            isChannelValid &&
            areCustomersValid &&
            areOrdersValid &&
            typeof data.price === 'number' &&
            typeof data.amount_paid === 'number' &&
            typeof data.realm_id === 'number' &&
            typeof data.datetime === 'string'
        );
    } catch(err) {
        console.log(err);
        return false;
    }
}