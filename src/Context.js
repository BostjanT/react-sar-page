import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [error, setError] = useState(null);
  const [allArticles, setAllArticles] = useState([]);
  let contentful = require("contentful");

  /* const API_BASE_URL = "https://cdn.contentful.com"; */
  const API_SPACE_ID = "quuudgeu6kvg";
  const API_TOKEN = "anFDgz6QfwXf8VYgCQQNCsE8KoJD2ZxLv3t-d1PMJzw";
  /* 
  const url = `${API_BASE_URL}/spaces/${API_SPACE_ID}/entries?access_token=${API_TOKEN}&content_type=klubskeNovice`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllArticles(data.items));
    }, []); */

  const client = contentful.createClient({
    space: API_SPACE_ID,
    accessToken: API_TOKEN,
  });

  useEffect(() => {
    client.getEntries({ order: "-sys.createdAt" }).then(
      (data) => {
        setAllArticles(data.items);
      },
      (error) => {
        setError(error);
      }
    );
  }, []);
  console.log(error);

  /* console.log(allArticles); */

  return (
    <Context.Provider value={{ allArticles }}>{children}</Context.Provider>
  );
}
export { ContextProvider, Context };
