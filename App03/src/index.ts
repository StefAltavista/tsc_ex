import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { MatchResults } from "./MatchResults";
console.log("hello");

const matches = reader.data;

console.log(matches);

//enumeration

let manUnitedWinns = 0;
matches.map((match): void => {
    (match[1] === "Man United" && match[5] === MatchResults.HomeWin) ||
    (match[2] === "Man United" && match[5] === MatchResults.AwayWin)
        ? manUnitedWinns++
        : null;
});

console.log("Manchester United Victories:", manUnitedWinns);
