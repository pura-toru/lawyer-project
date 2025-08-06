require('dotenv').config()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME 
});

async function testDB() {
  let conn;
  try{
    conn = await pool.getConnection();
    const result = await conn.query('SELECT * FROM lawyers');
    console.log('Database connected', result);
  } catch(err) {
    console.error('Unable to connect:', err);
  };
}

testDB();

module.exports =pool;
