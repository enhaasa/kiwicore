export type TServiceItem = {
    id: number;
    name: string;
    price: number;
    minute_interval: number;
    type: string;
    description: string;
    is_available: boolean;
    realm_id: number;
}

export function isValidServiceItem(item: any): item is TServiceItem {
    try {
        return typeof item.id === 'number' &&
               typeof item.name === 'string' &&
               typeof item.price === 'number' &&
               typeof item.minute_interval === 'number' &&
               typeof item.type === 'string' &&
               typeof item.description === 'string' &&
               typeof item.is_available === 'boolean' &&
               typeof item.realm_id === 'number';
    } catch (err) {
        console.log(err);
        return false;
    }
}
