import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";

import { ConsoleReports } from "./reportTargets/ConsoleReports";
import { WinsAnalysis } from "./analizers/WinsAnalysis";
import { Summary } from "./Summary";

import { HtmlReports } from "./reportTargets/HtmlReport";

//create an object that satisfies the "DataReader" interface
const csvFileReader = new CsvFileReader("football.csv");

//create an instance of MatchReader and pass in something satisfying
//the DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new HtmlReports());
summary.buildAndPrintReport(matchReader.matches);
