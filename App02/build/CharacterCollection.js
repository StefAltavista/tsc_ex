"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterCollection = void 0;
class CharacterCollection {
    constructor(data) {
        this.data = data;
        this.data = data;
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
