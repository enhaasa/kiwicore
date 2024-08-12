"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidCustomer = void 0;
function isValidCustomer(customer) {
    try {
        return typeof customer.id === 'number' &&
            typeof customer.name === 'string' &&
            typeof customer.section_id === 'number' &&
            typeof customer.seating_id === 'number' &&
            typeof customer.realm_id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.isValidCustomer = isValidCustomer;
