require('dotenv').config()
const mariadb = require('mariadb');

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME 
});

const query = async(sql, params) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query(sql, params || []);
    return rows;
  } finally {
    if (conn) conn.release();
  }
}

module.exports = { query };
