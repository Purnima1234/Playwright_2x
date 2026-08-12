import * as fs from 'fs';
import * as yaml from 'js-yaml';

export function readYAML(filePath: string): Record<string, string>[] {
    let content = fs.readFileSync(filePath, 'utf-8');
    return yaml.load(content) as Record<string, string>[];
}
