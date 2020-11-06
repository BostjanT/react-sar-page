import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/Header";
import Articles from "./pages/Articles";
import Article from "./components/Article"; 
import About from "./components/About";
import RescueDogs from "./components/RescueDogs";
import WhatWeDo from "./components/WhatWeDo";
import Footer from "./components/Footer";
import SmallGallery from "./components/SmallGallery";
import BasicNews from "./pages/BasicNews";
import ResevalniPes from "./pages/ResevalniPes";
import Aktivnosti from "./pages/Aktivnosti";

import "./App.css";
import "./style.css";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <About />
          <RescueDogs />
          <WhatWeDo />
          <BasicNews />
          <SmallGallery />
          <Sponsors />
        </Route>

        <Route path="/o-nas">
          <About />
        </Route>
        <Route path="/resevalni-psi">
          <ResevalniPes />
        </Route>
        <Route path="/aktivnosti">
          <Aktivnosti />
        </Route>
        <Route exact path="/novice">
          <Articles />
        </Route>
        <Route path="/novice/:articleID">
          <Article />
        </Route> 
        <Route path="/galerija">
          <SmallGallery />
        </Route>
      </Switch>
      <Footer />
    </>
  );
}

export default App;
