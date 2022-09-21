import { OutputTarger } from "../Summary";

export class ConsoleReports implements OutputTarger {
    print(report: string): void {
        console.log(report);
    }
}
