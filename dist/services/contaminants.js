import { contaminantsData } from '../data.js';
export function getRfD(contaminantName) {
    const found = contaminantsData
        .find(c => c.name.toLowerCase() === contaminantName.toLowerCase());
    return found?.rfd;
}
export function listContaminants() {
    return contaminantsData.map(c => c.name);
}
