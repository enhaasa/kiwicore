"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSession = void 0;
function isValidSession(data) {
    try {
        const isChannelValid = data.channel &&
            typeof data.channel.name === 'number' &&
            typeof data.channel.section_name === 'string' &&
            typeof data.channel.section_id === 'number';
        const areCustomersValid = Array.isArray(data.customers) &&
            data.customers.every((customer) => typeof customer === 'string');
        const areOrdersValid = Array.isArray(data.orders);
        return (typeof data.id === 'number' &&
            isChannelValid &&
            areCustomersValid &&
            areOrdersValid &&
            typeof data.price === 'number' &&
            typeof data.amount_paid === 'number' &&
            typeof data.realm_id === 'number' &&
            typeof data.datetime === 'string');
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.isValidSession = isValidSession;
