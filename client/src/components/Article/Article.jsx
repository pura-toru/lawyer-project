import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Article.css';

const Article = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getArticle = async () => {
      try{
        const res = await fetch(`http://localhost:3000/articles/${id}`);
        const data = await res.json();
        setArticle(data[0]); //This works because the backend wraps the article in an array, you have to take the first element of that array:  
      } catch (err) {
        console.error("Failed to fetch: ", err);
      }
    };
    getArticle()
  }, [id]);

  if (!article) 
    return <div className="spinner">Loading...</div>

  return(
    <div className="article-container">
      <img src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/msqd2XJ/videoblocks-police-officer-arresting-criminal-putting-him-on-car-trunk-and-reading-miranda-rights-for-him_r96cpyz6z_thumbnail-1080_01.png" alt="article picture" /> 
      <h1>{article.article_title}</h1>
      <p>{article.article_content}</p>
    </div>
  );
}

export default Article;
