export type TService = {
    name: string;
    price: number;
    total: number | null;
    start_datetime: string;
    minute_interval: number;
    end_datetime: string;
    customer_id: number;
    seating_id: number;
    section_id: number;
    realm_id: number;
    id: number;
};
export declare function isValidService(service: any): service is TService;
//# sourceMappingURL=Service.d.ts.map