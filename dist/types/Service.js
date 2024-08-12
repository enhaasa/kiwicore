"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidService = void 0;
function isValidService(service) {
    try {
        return typeof service.is_completed === 'boolean' &&
            typeof service.name === 'string' &&
            typeof service.price === 'number' &&
            typeof service.minute_interval === 'number' &&
            typeof service.customer_id === 'number' &&
            typeof service.seating_id === 'number' &&
            typeof service.section_id === 'number' &&
            typeof service.realm_id === 'number' &&
            typeof service.id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.isValidService = isValidService;
