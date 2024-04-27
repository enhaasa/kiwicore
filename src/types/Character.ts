export type TCharacter = {
    id: number;
    bio: string;
    gender: string;
    hired_date: string;
    is_enabled: boolean;
    is_attending: boolean;
    hours_worked: number;
    is_paid: boolean;
    name: string;
    positions: string;
    title: string;
    watched_tables: number[];
    image_url: null|string;
    user_id: number;
    realm_id: number;
}

export function isValidCharacter(data: any): data is TCharacter {
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
    } catch(err) {
        console.log(err);
        return false;
    }
}