export function isValidSectionPointer(sectionPointer) {
    try {
        return typeof sectionPointer.id === 'number' &&
            typeof sectionPointer.type === 'string' &&
            typeof sectionPointer.pos_x === 'number' &&
            typeof sectionPointer.pos_y === 'number' &&
            typeof sectionPointer.section_id === 'number' &&
            typeof sectionPointer.target_section_id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
