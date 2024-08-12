"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSeating = void 0;
const Customer_1 = require("./Customer");
function isValidSeating(seating) {
    try {
        return typeof seating.id === 'number' &&
            typeof seating.number === 'number' &&
            typeof seating.section_id === 'number' &&
            Array.isArray(seating.customers) && seating.customers.every(Customer_1.isValidCustomer) &&
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
exports.isValidSeating = isValidSeating;
