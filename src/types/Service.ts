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
}

export function isValidService(service: any): service is TService {
    try {
        return typeof service.is_completed === 'boolean' &&
            typeof service.name === 'string' &&
            typeof service.price === 'number' &&
            typeof service.minute_interval === 'number' &&
            typeof service.customer_id === 'number' &&
            typeof service.seating_id === 'number' &&
            typeof service.section_id === 'number' &&
            typeof service.realm_id === 'number' &&
            typeof service.id === 'number';
    } catch(err) {
        console.log(err);
        return false;
    }
}