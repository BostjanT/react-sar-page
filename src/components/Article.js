import React from "react";
import "./css/Article.css";
import {useParams} from 'react-route-dom'
function Article({ news }) {
  const {articleId} = useParams()
  const { title, date, besedilo, id } = news.fields;
  const news = news.filter(news => news.id === articleId)
  console.log(news);
  return (
    <div className="show-news" id={id}>
      <div className="news-content">
        <img src={`https:${news.fields.image.fields.file.url}`} alt="article" />
        <h2>{title}</h2>
        <p>{date}</p>
        <p>{besedilo}</p>
      </div>
    </div>
  );
}

export default Article;

/* import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";
import "./css/Article.css";

function Article({ news }) {
  console.log(window.location.pathname); 
  const { articleId } = useParams();
  const { allArticles } = useContext(Context);
  
  const articleGet = allArticles.find(
    (article) => article.fields.id === parseInt(articleId)
  );
  

  return (
    <>
      <div className="show-news" id={articleGet.fields.id}>
        <div className="news-content">
          <img
            src={`https:${articleGet.fields.image.fields.file.url}`}
            alt="article"
          />
          <h2>{articleGet.fields.title}</h2>
          <p>{articleGet.fields.date}</p>
          <p>{articleGet.fields.besedilo}</p>
        </div>
      </div>
    </>
  );
} 

export default Article;
*/

