const fs = require("fs");
console.log("hello");

const matches = fs
    .readFileSync("./football.csv", {
        encoding: "utf-8",
    })
    .split("\n")
    .map((row: string): string[] => {
        return row.split(",");
    });

console.log(matches);

let manUnitedWinns = 0;
matches.map((match: string[]): void => {
    (match[1] === "Man United" && match[5] === "H") ||
    (match[2] === "Man United" && match[5] === "A")
        ? manUnitedWinns++
        : null;
});

console.log("Manchester United Victories:", manUnitedWinns);
