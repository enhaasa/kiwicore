export type TSection = {
    id: number;
    name: string;
    type: string;
    image_url: string | null;
    pos_index: number;
    realm_id: number;
};
export declare function isValidSection(section: any): section is TSection;
//# sourceMappingURL=Section.d.ts.map