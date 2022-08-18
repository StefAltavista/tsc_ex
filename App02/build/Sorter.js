"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    sort() {
        // To check the Type (or interface) of any variable that ist Number, String or Boolean use:
        // if (this.collection instanceof Array) {
        for (let i = 0; i < this.collection.length; i++) {
            for (let j = 0; j < this.collection.length - i - 1; j++) {
                this.collection.compare(j, j + 1)
                    ? this.collection.swap(j, j + 1)
                    : null;
            }
        }
    }
}
exports.Sorter = Sorter;
