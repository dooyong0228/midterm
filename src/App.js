import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./Component/Header";
import Nav from "./Component/Nav";
import Html from "./Component/Html";
import Css from "./Component/Css";
import Js from "./Component/Js";
import ReactJs from "./Component/ReactJs";
import NotFound from "./Component/NotFound";
import Article from "./Component/Article";
import Footer from "./Component/Footer";
import Contest from "./Component/Contest";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div className="container">
          <Nav />
          <Routes>
            <Route path="/html" Component={Html} />
            <Route path="/css" Component={Css} />
            <Route path="/js" Component={Js} />
            <Route path="/reactjs" Component={ReactJs} />
            <Route path="/nodejs" Component={Contest} />
            <Route path="*" element={NotFound} />
          </Routes>

          <Article />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
