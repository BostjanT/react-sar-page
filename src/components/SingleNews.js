import React, {useState, useEffect} from "react";
import {useParams} from 'react-router-dom'
import "../style.css";
function SingleNews() {
  const { articleId } = useParams();
  const [allArticles, setAllArticles] = useState([]);
  const [error, setError] = useState(null);
  const API_SPACE_ID = "quuudgeu6kvg";
  const API_TOKEN = "anFDgz6QfwXf8VYgCQQNCsE8KoJD2ZxLv3t-d1PMJzw";

  const client = contentful.createClient({
    space: API_SPACE_ID,
    accessToken: API_TOKEN,
  });
  
  const row = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  };

  const column = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "280px",
    margin: "5px 15px",
    border: "1px solid black",
    boxShadow: "3px 3px 8px black",
    borderRadius: "3px",
    cursor: "pointer",
  };

  const style = {
    width: "280px",
    height: "194px",
  };

  const title = {
    fontSize: "1rem",
    fontWeight: "500",
  };
  
   useEffect(() => {
    client
      .getEntries({ order: "-sys.createdAt", content_type: "klubskeNovice" })
      .then(
        (data) => {
          setAllArticles(data.items);
        },
        (error) => {
          setError(error);
        }
      );
  }, []);

  const singleArticle = allArticles.find(
    (article) => article.fields.id.toString() === articleId
  );
  console.log(singleArticle);

  return singleArticle ? (
    <div className='article-container'>
      <div className='show-article'>
        <h1>{singleArticle.fields.title}</h1>
        <img src={`https:${singleArticle.fields.image.fields.file.url}`} alt='article'/>
        <h3>Datum objave: {singleArticle.fields.date}</h3>
        <p>{singleArticle.fields.besedilo}</p>
      </div>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
}
  


export default SingleNews;
