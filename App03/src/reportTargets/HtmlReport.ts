import { OutputTarger } from "../Summary";
import fs from "fs";
export class HtmlReports implements OutputTarger {
    print(report: string): void {
        const html = `
        <div>
        <h1>Analysis Report</h1>
        <p>${report}</p>
        </div>
        `;
        fs.writeFileSync("report.html", html);
    }
}
