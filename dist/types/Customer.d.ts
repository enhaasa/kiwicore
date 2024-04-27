export type TCustomer = {
    id: number;
    name: string;
    section_id: number;
    seating_id: number;
    session_id: number | unknown;
    realm_id: number;
};
export declare function isValidCustomer(customer: any): customer is TCustomer;
//# sourceMappingURL=Customer.d.ts.map