import { TCustomer, isValidCustomer } from "./Customer";

export type TSeating = {
    id: number;
    pos_x: number;
    pos_y: number;
    availability: string;
    realm_id: number;
    section_id: number;
    number: number;
    waiter_character_id: number | null;
    section_name: string;
    customers: TCustomer[];
}

export function isValidSeating(seating: any): seating is TSeating {
    try {
        return typeof seating.id === 'number' &&
            typeof seating.number === 'number' &&
            typeof seating.section_id === 'number' &&
            Array.isArray(seating.customers) && seating.customers.every(isValidCustomer) &&
            typeof seating.waiter_character_id === 'number' || seating.waiter_character_id === null &&
            typeof seating.pos_x === 'number' &&
            typeof seating.pos_y === 'number' &&
            typeof seating.availability === 'string';
    } catch(err) {
        console.log(err);
        return false;
    }
}