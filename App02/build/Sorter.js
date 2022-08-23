"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// Old implementation required this interface
// interface Sortable {
//     compare(left: number, right: number): boolean;
//     swap(left: number, right: number): void;
//     length: number;
// }
class Sorter {
    sort() {
        for (let i = 0; i < this.length; i++) {
            for (let j = 0; j < this.length - i - 1; j++) {
                this.compare(j, j + 1) ? this.swap(j, j + 1) : null;
            }
        }
    }
}
exports.Sorter = Sorter;
