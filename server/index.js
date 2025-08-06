const express = require('express');
const pool = require('./db.js');
const app = express();

app.use(express.json());

app.get('/lawyers', async (req, res) => {
  try {
    const connection = await pool.getConnection();
    const lawyers = await connection.query('SELECT * FROM lawyers');
    console.log(lawyers);
    res.json(lawyers);
  } catch(err) {
      console.error(err);
      res.status(500).send({ message: 'Error fetching lawyers'});
  }
});

app.listen(3000, () => {
  console.log('Server listening')
})
