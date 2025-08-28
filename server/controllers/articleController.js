const db = require('../db.js')

const getArticles = async (req, res) => {
  try{
    const articles = await db.query('SELECT * FROM articles;');
    res.status(200).json(articles);
  } catch(err) {
    console.error(err);
  }
};

const getArticleById = async (req, res) => {
  const id = parseInt(req.params.id);
  
  try {
    const articleById = await db.query('SELECT * FROM articles WHERE article_id = ?', [id])
    res.status(200).json(articleById);
  } catch(err) {
    console.error(err);
  }
}

module.exports = { getArticles, getArticleById }
