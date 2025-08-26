const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const lawyerRoutes = require('./routes/lawyerRoutes.js');
const PORT = 3000

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// const corsOptions = { origin: 'http://localhost:5173' };
app.use(cors());

app.use('/lawyers', lawyerRoutes)

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})

// app.get('/lawyers', async (req, res) => {
//   // async function testDB() {
//   let conn;
//   try{
//     conn = await pool.getConnection();
//     const result = await conn.query('SELECT * FROM lawyers');
//     res.json(result);
//   } catch(err) {
//     console.error('Unable to connect:', err);
//     res.status(500).send({ message: 'Error fetching lawyers' })
//   }
// });

