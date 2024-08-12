export function isValidSection(section) {
    try {
        return typeof section.id === 'number' &&
            typeof section.name === 'string' &&
            typeof section.type === 'string' &&
            typeof section.pos_index === 'number' &&
            typeof section.realm_id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
