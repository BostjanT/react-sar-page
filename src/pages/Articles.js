import React, { useContext } from "react";

import Article from "../components/Article";
import { Context } from "../Context";
import ScrollToTop from "../components/ScrollToTop";

function Articles() {
  const { allArticles } = useContext(Context);
  /* console.log(allArticles); */

  const articleElement = allArticles.map((news) => (
    <Article key={news.fields.id} news={news} />
  ));

  return (
    <div>
      <ScrollToTop />
      <h2 className="text-center">NOVICE</h2>
      {articleElement}
    </div>
  );
}
export default Articles;
