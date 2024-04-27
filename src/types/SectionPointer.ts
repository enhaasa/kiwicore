export type TSectionPointer = {
    id: number;
    type: string;
    pos_x: number;
    pos_y: number;
    section_id: number;
    target_section_id: number;
    name: string;
}
export function isValidSectionPointer(sectionPointer: any): sectionPointer is TSectionPointer {
    try {
        return typeof sectionPointer.id === 'number' &&
            typeof sectionPointer.type === 'string' &&
            typeof sectionPointer.pos_x === 'number' &&
            typeof sectionPointer.pos_y === 'number' &&
            typeof sectionPointer.section_id === 'number' &&
            typeof sectionPointer.target_section_id === 'number'
    } catch(err) {
        console.log(err);
        return false;
    }
}