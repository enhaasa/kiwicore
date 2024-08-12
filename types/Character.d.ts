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
    image_url: null | string;
    user_id: number;
    realm_id: number;
};
export declare function isValidCharacter(data: any): data is TCharacter;
//# sourceMappingURL=Character.d.ts.map