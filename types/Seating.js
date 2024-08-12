import { isValidCustomer } from "./Customer";
export function isValidSeating(seating) {
    try {
        return typeof seating.id === 'number' &&
            typeof seating.number === 'number' &&
            typeof seating.section_id === 'number' &&
            Array.isArray(seating.customers) && seating.customers.every(isValidCustomer) &&
            typeof seating.waiter_character_id === 'number' || seating.waiter_character_id === null &&
            typeof seating.pos_x === 'number' &&
            typeof seating.pos_y === 'number' &&
            typeof seating.availability === 'string';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
