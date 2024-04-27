import { TCustomer } from "./Customer";
export type TSeating = {
    id: number;
    pos_x: number;
    pos_y: number;
    availability: string;
    realm_id: number;
    section_id: number;
    number: number;
    waiter_character_id: number | null;
    section_name: string;
    customers: TCustomer[];
};
export declare function isValidSeating(seating: any): seating is TSeating;
//# sourceMappingURL=Seating.d.ts.map