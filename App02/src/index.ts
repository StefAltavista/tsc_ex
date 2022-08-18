import { Sorter } from "./Sorter";
import { NumberCollection } from "./NumbersCollection";
import { CharacterCollection } from "./CharacterCollection";
const num = new NumberCollection([-5, 4, 776, 234, 2, -23]);
const sorter = new Sorter(num);
sorter.sort();
console.log(sorter.collection);

const char = new CharacterCollection("yzZZOOeHey");
const sorterChar = new Sorter(char);
sorterChar.sort();
console.log(sorterChar.collection);
