export class CharacterCollection {
    constructor(public data: string) {
        this.data = data;
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
