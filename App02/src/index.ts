import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
import { LinkedList } from "./LinkedList";

const num = new NumberCollection([-5, 4, 776, 234, 2, -23]);
num.sort();

console.log(num.data);

const char = new CharacterCollection("yzZZOOeHey");
char.sort();
console.log(char.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(4);
linkedList.add(12350);
linkedList.add(-3);

linkedList.sort();

linkedList.print();
