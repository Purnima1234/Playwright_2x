import * as mysql from 'mysql2/promise';

export interface DBConfig {
    host: string;
    user: string;
    password: string;
    database: string;
}

export async function readMySQL(config: DBConfig, query: string): Promise<Record<string, string>[]> {
    const connection = await mysql.createConnection(config);
    const [rows] = await connection.execute(query);
    await connection.end();
    return rows as Record<string, string>[];
}
