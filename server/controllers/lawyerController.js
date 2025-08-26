const db = require('../db.js');

const getLawyers = async (req, res) => {
  try{
    const lawyers = await db.query('SELECT * FROM lawyers;');
    res.json(lawyers);
  } catch(err) {
    console.error('Unable to connect:', err);
    res.status(500).send({ message: 'Error fetching lawyers' })
  }
};

// const getLawyerById = async (req, res) => {
//   const id = parseInt(req.params.id)
//   let conn;
//
//   try{
//     conn = await pool.g
//     pool.query('')
//   }
//
// }

module.exports = { getLawyers };
