import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Articles.css'

const Articles = () => {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch('http://localhost:3000/articles');
        const data = await res.json();
        setArticle(data); 
      } catch (err) {
        console.error(err);
      }
    }
    fetchArticles();
  }, [])

  return (
    <div className='main-container'>
      {article.map((article) => {
        return(
          <Link to="/" key={article.article_id} style={{ textDecoration: 'none', color: 'inherit'}}>
            <div className='article-container'>
              <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/msqd2XJ/videoblocks-police-officer-arresting-criminal-putting-him-on-car-trunk-and-reading-miranda-rights-for-him_r96cpyz6z_thumbnail-1080_01.png" alt="article picture" /> 
              <div className="article-details">
                <div className="poster-container">
                  <img src="https://i.kym-cdn.com/entries/icons/original/000/040/009/3dsaulcover.jpg" alt="user photo" />
                  <h3>Saul Goodman</h3>
                </div>
                <h2 className='article-title'>{article.article_title}</h2>
                <p className='article-content'>{article.article_content}</p>
              </div>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export default Articles;
