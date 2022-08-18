interface Sortable {
    compare(left: number, right: number): boolean;
    swap(left: number, right: number): void;
    length: number;
}
export class Sorter {
    constructor(public collection: Sortable) {
        this.collection = collection;
    }
    sort(): void {
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
