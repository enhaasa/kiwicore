"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidSectionPointer = void 0;
function isValidSectionPointer(sectionPointer) {
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
exports.isValidSectionPointer = isValidSectionPointer;
