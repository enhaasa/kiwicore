export type TTip = {
    name: string;
    amount: number;
    realm_id: number;
    datetime: string;
    id: number;
}

export function isValidTip(tip: any): tip is TTip {
    try {
        return typeof tip.name === 'string' &&
            typeof tip.amount === 'number' &&
            typeof tip.realm_id === 'number' &&
            typeof tip.datetime === 'string' &&
            typeof tip.id === 'number';
    } catch(err) {
        console.log(err);
        return false;
    }
}