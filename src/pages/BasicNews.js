import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../Context";
import SingleNews from "../components/SingleNews";

function BasicNews() {
  const { allArticles } = useContext(Context);

  const row = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 0",
  };

  const column = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#21b8ef",
  };

  const showLastFour = allArticles.map((item) => {
    return (
      <Link to={`/novice/${item.fields.id}`}>
        <SingleNews key={item.fields.id} item={item} />
      </Link>
    );
  });

  const lastFour = showLastFour.slice(0, -2);
  return (
    <div style={column}>
      <h3>Zadnje Novice</h3>
      <div style={row}>{lastFour}</div>
    </div>
  );
}

export default BasicNews;

/*<Link to={`/novice/${i + 1}`}>
        <SingleNews key={item.fields.id} item={item} />
      </Link>*/
