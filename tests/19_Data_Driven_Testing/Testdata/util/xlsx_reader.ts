import * as XLSX from 'xlsx';

export function readXLSX(filePath: string): Record<string, string>[] {
    let workbook = XLSX.readFile(filePath);
    let sheetName = workbook.SheetNames[0];
    let sheet = workbook.Sheets[sheetName];
    return XLSX.utils.sheet_to_json<Record<string, string>>(sheet);
}
