export function isValidRealm(realm) {
    try {
        return typeof realm.id === 'number' &&
            typeof realm.address === 'string' &&
            typeof realm.founding_date === 'string' &&
            typeof realm.name === 'string' &&
            typeof realm.image_url === 'string' &&
            typeof realm.link === 'string';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
