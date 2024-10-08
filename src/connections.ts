import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();

const {Pool} = pg;

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: 'localhost',
    database: process.env.DB_NAME,
    port: 5432,
});

const connectToDb = async () => {
    try {
        await pool.connect();
        console.log('Connected to database');

    } catch (err) {
        console.error('Failed to connect to database', err);
        process.exit(1);
    }
};

export {connectToDb, pool};