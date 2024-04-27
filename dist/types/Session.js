export function isValidSession(data) {
    try {
        var isChannelValid = data.channel &&
            typeof data.channel.name === 'number' &&
            typeof data.channel.section_name === 'string' &&
            typeof data.channel.section_id === 'number';
        var areCustomersValid = Array.isArray(data.customers) &&
            data.customers.every(function (customer) { return typeof customer === 'string'; });
        var areOrdersValid = Array.isArray(data.orders);
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
