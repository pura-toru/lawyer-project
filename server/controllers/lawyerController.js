const db = require('../db.js');

const getLawyers = async (req, res) => {
  try {
    const lawyers = await db.query('SELECT * FROM lawyers;');
    res.status(200).json(lawyers);
  } catch(err) {
    console.error('Unable to connect:', err);
    // res.status(500).send({ message: 'Error fetching lawyers' })
  }
};

const getLawyerById = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const lawyerById = await db.query('SELECT * FROM lawyers WHERE lawyer_id = ?', [id]) 
    res.status(200).json(lawyerById);
  } catch(err) {
    console.error(`Unable to fetch lawyer by ID: ${id}`);
    // res.status(500).send({ message: 'Error fetching Lawyer ID!'})
  }
}

const createLawyer = async (req, res) => {
  const { first_name, last_name, date_of_birth, location, biography, experience } = req.body

  try {
    const put = await db.query(
      'INSERT INTO lawyers (first_name, last_name, date_of_birth, location, biography, experience) VALUES (?, ?, ?, ?, ?, ?);', [first_name, last_name, date_of_birth, location, biography, experience]
    )
    res.status(201).json({ message: `User added with ID: ${put.lawyer_id}` });
  } catch(err) {
    console.error("Unable to insert query!")
    // res.status(500).send({ message: 'Insert query failed!'})
  }
}

const deleteLawyer = async (req, res) => {
  const id = parseInt(req.params.id)

  try {
    const del = await db.query('DELETE FROM lawyers WHERE lawyer_id = ?', [id])
    res.status(200).json({ message: `Successfully deleted lawyer ID: ${id}` })
  
  } catch(err) {
    console.error(`Failed to delete Lawyer by ID: ${id}`);
  }
}

module.exports = { getLawyers, getLawyerById, createLawyer, deleteLawyer };
