"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharacterCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.data = data; //no need for this
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx, rightIdx) {
        return (this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase());
    }
    swap(leftIdx, rightIdx) {
        let characters = this.data.split("");
        let leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = leftHand;
        this.data = characters.join("");
    }
}
exports.CharacterCollection = CharacterCollection;
