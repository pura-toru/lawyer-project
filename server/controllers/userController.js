const db = require('../db.js');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
  const { email, password } = req.body;

  try {
    const rows = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);

    //Hash
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    if (rows.length > 0) {
      return res.status(409).json({message: "Email already exists. Try logging in." });
    } else {
      const result = await db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]
      );
      console.log(result);
      res.status(201).json({ message: "Registration successful" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({message: "Server error"});
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const rows = await db.query("SELECT * FROM users WHERE email = ?", [email]);

    if (rows.length > 0) {
      const user = rows[0];
      const storedPassword = user.password;
  
      //Hash Unlock
      const match = await bcrypt.compare(password, storedPassword);

      // if (password === storedPassword) {
        // send back a token here when using JWT later
      if (match) {
        // send back a token here when using JWT
        res.json({ message: "Login successful"});
      } else {
        res.status(401).json({ message: "Incorrect password"});
      }
    } else {
      res.status(404).json({ message:"User not found"});
    }
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error"});
  }
};

module.exports = {register, login}
