export type TSection = {
    id: number;
    name: string;
    type: string;
    image_url: string | null;
    pos_index: number;
    realm_id: number;
}

export function isValidSection(section: any): section is TSection {
    try {
        return typeof section.id === 'number' &&
            typeof section.name === 'string' &&
            typeof section.type === 'string' &&
            typeof section.pos_index === 'number' &&
            typeof section.realm_id === 'number';
    } catch(err) {
        console.log(err);
        return false;
    }
}