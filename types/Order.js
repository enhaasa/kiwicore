export function isValidOrder(order) {
    try {
        return typeof order.is_delivered === 'boolean' &&
            typeof order.name === 'string' &&
            typeof order.price === 'number' &&
            typeof order.section_id === 'number' &&
            typeof order.customer_id === 'number' &&
            typeof order.seating_id === 'number' &&
            typeof order.item === 'string' &&
            typeof order.realm_id === 'number' &&
            typeof order.time === 'string' || typeof order.time === 'number' || order.time === null &&
            typeof order.datetime === 'string' || order.datetime === null &&
            typeof order.id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
