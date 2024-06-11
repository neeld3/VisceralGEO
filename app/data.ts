import { NextApiRequest, NextApiResponse } from 'next';
import { Pool } from 'pg';

const pool = new Pool({
    user: "postgres",
    host: "vgeo-1.c271tjjdrfsu.us-east-1.rds.amazonaws.com",
    database: "postgres",
    password: "8ktR9MI:-0c]",
    port: 5432,
  });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await pool.connect();
    const result = await client.query('SELECT * FROM test_table');
    console.log('Result from PostgreSQL:', result.rows); // Log the result
    client.release();
    res.status(200).json({ data: result.rows[0] });
  } catch (error) {
    console.error('Error fetching data from PostgreSQL:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}