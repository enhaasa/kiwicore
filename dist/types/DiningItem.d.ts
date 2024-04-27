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
};
export declare function isValidDiningItem(item: any): item is TDiningItem;
//# sourceMappingURL=DiningItem.d.ts.map