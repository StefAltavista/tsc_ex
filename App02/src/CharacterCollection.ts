import { Sorter } from "./Sorter";

export class CharacterCollection extends Sorter {
    constructor(public data: string) {
        super();
        this.data = data; //no need for this
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx: number, rightIdx: number): boolean {
        return (
            this.data[leftIdx].toLowerCase() > this.data[rightIdx].toLowerCase()
        );
    }
    swap(leftIdx: number, rightIdx: number): void {
        let characters = this.data.split("");

        let leftHand = characters[leftIdx];
        characters[leftIdx] = characters[rightIdx];
        characters[rightIdx] = leftHand;

        this.data = characters.join("");
    }
}
