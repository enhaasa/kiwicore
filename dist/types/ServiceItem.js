"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidServiceItem = void 0;
function isValidServiceItem(item) {
    try {
        return typeof item.id === 'number' &&
            typeof item.name === 'string' &&
            typeof item.price === 'number' &&
            typeof item.minute_interval === 'number' &&
            typeof item.type === 'string' &&
            typeof item.description === 'string' &&
            typeof item.is_available === 'boolean' &&
            typeof item.realm_id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.isValidServiceItem = isValidServiceItem;
