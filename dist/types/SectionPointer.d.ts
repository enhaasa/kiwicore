export type TSectionPointer = {
    id: number;
    type: string;
    pos_x: number;
    pos_y: number;
    section_id: number;
    target_section_id: number;
    name: string;
};
export declare function isValidSectionPointer(sectionPointer: any): sectionPointer is TSectionPointer;
//# sourceMappingURL=SectionPointer.d.ts.map