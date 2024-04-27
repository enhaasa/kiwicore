export function isValidTip(tip) {
    try {
        return typeof tip.name === 'string' &&
            typeof tip.amount === 'number' &&
            typeof tip.realm_id === 'number' &&
            typeof tip.datetime === 'string' &&
            typeof tip.id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
