export function isValidCharacter(data) {
    try {
        return typeof data.id === 'number' &&
            typeof data.bio === 'string' &&
            typeof data.gender === 'string' &&
            typeof data.hired_date === 'string' &&
            typeof data.is_enabled === 'boolean' &&
            typeof data.is_attending === 'boolean' &&
            typeof data.hours_worked === 'number' &&
            typeof data.is_paid === 'boolean' &&
            typeof data.name === 'string' &&
            typeof data.positions === 'string' &&
            typeof data.title === 'string' &&
            (data.image_url === null || typeof data.image_url === 'string') &&
            typeof data.user_id === 'number' &&
            typeof data.realm_id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
