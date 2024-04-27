    
export type TCustomer = {
    id: number;
    name: string;
    section_id: number;
    seating_id: number;
    session_id: number|unknown;
    realm_id: number;
}
export function isValidCustomer(customer: any): customer is TCustomer {
    try {
        return typeof customer.id === 'number' &&
               typeof customer.name === 'string' &&
               typeof customer.section_id === 'number' &&
               typeof customer.seating_id === 'number' &&
               typeof customer.realm_id === 'number';
    } catch(err) {
        console.log(err);
        return false;
    }
}