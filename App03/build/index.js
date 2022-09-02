"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResults_1 = require("./MatchResults");
console.log("hello");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
const matches = reader.data;
console.log(matches);
//enumeration
let manUnitedWinns = 0;
matches.map((match) => {
    (match[1] === "Man United" && match[5] === MatchResults_1.MatchResults.HomeWin) ||
        (match[2] === "Man United" && match[5] === MatchResults_1.MatchResults.AwayWin)
        ? manUnitedWinns++
        : null;
});
console.log("Manchester United Victories:", manUnitedWinns);
