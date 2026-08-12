import * as fs from 'fs';

import * as path from 'path';

export interface TestDataRow {
    [key: string]: string;

}

export function readCSV(filePath: string): TestDataRow[] {
    let fullpath=path.resolve(filePath);
    let content= fs.readFileSync(fullpath, 'utf-8');
    let lines=content.trim().split("\n");

    //first line header
    let header=lines[0].split(",");

    // remaining lines are data
    let data: TestDataRow[]=[];
for(let i=1; i<lines.length; i++){
    let values= lines[i].split(",");
    let row:TestDataRow={};
    for(let j=0; j<header.length; j++){
        row[header[j].trim()]=values[j]? values[j].trim()||"": "";
    }
    data.push(row);
}
return data;

}


