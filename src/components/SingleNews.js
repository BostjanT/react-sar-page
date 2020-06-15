import React from "react";
import "../style.css";
function SingleNews({ item }) {
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

  return (
    <div style={row}>
      <div style={column} id={item.fields.id}>
        <img
          style={style}
          src={`https:${item.fields.image.fields.file.url}`}
          alt="solo-img"
        />
        <h4 style={title}>{item.fields.title}</h4>
      </div>
    </div>
  );
}

export default SingleNews;
