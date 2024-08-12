"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidDiningItem = void 0;
function isValidDiningItem(item) {
    try {
        return typeof item.id === 'number' &&
            typeof item.name === 'string' &&
            typeof item.price === 'number' &&
            typeof item.ingredients === 'string' &&
            typeof item.description === 'string' &&
            typeof item.pairings === 'string' &&
            typeof item.size === 'string' &&
            typeof item.type === 'string' &&
            typeof item.item === 'string' &&
            typeof item.is_available === 'boolean' &&
            typeof item.image_url === 'string' &&
            typeof item.creation_text === 'string' &&
            typeof item.realm_id === 'number';
    }
    catch (err) {
        console.log(err);
        return false;
    }
}
exports.isValidDiningItem = isValidDiningItem;
