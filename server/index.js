const express = require('express');
const pool = require('./db.js');
const cors = require('cors');
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'http://localhost:5173',
};

app.use(cors(corsOptions));

app.listen(3000, () => {
  console.log('Server listening')
})

app.get('/lawyers', async (req, res) => {
  // async function testDB() {
  let conn;
  try{
    conn = await pool.getConnection();
    const result = await conn.query('SELECT * FROM lawyers');
    res.json(result);
  } catch(err) {
    console.error('Unable to connect:', err);
    res.status(500).send({ message: 'Error fetching users' })
  }
});
