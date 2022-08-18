export class NumberCollection {
    constructor(public data: number[]) {
        this.data = data;
    }
    get length() {
        return this.data.length;
    }
    compare(leftIdx: number, rightIdx: number): boolean {
        return this.data[leftIdx] > this.data[rightIdx];
    }
    swap(leftIdx: number, rightIdx: number): void {
        let leftHand = this.data[leftIdx];
        this.data[leftIdx] = this.data[rightIdx];
        this.data[rightIdx] = leftHand;
    }
}
