    
export type TDiningItem = {
    id: number;
    name: string;
    price: number;
    ingredients: string;
    description: string;
    pairings: string;
    size: string;
    type: string;
    item: string;
    is_available: boolean;
    image_url: string;
    creation_text: string;
    realm_id: number;
}

export function isValidDiningItem(item: any): item is TDiningItem {
    try {
        return typeof item.id === 'number' &&
               typeof item.name === 'string' &&
               typeof item.price === 'number' &&
               typeof item.ingredients === 'string' &&
               typeof item.description === 'string' &&
               typeof item.pairings === 'string' &&
               typeof item.size === 'string' &&
               typeof item.type === 'string' &&
               typeof item.item === 'string' &&
               typeof item.is_available === 'boolean' &&
               typeof item.image_url === 'string' &&
               typeof item.creation_text === 'string' &&
               typeof item.realm_id === 'number';
    } catch (err) {
        console.log(err);
        return false;
    }
}
