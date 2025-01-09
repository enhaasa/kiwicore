export type TRealm = {
    id: number;
    address: string;
    alias: string;
    discord_invite_link: string;
    founding_date: string;
    name: string;
    image_url: string;
    link: string;
}

export function isValidRealm(realm: any): realm is TRealm {
    try {
        return typeof realm.id === 'number' &&
            typeof realm.address === 'string' &&
            typeof realm.founding_date === 'string' &&
            typeof realm.alias === 'string' &&
            typeof realm.discord_invite_link === 'string' &&
            typeof realm.name === 'string' &&
            typeof realm.image_url === 'string' &&
            typeof realm.link === 'string';
    } catch(err) {
        console.log(err);
        return false;
    }
}