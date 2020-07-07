import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import BlogContent from "./components/BlogContent";

function App() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("https://litipsum.com/api")
      .then(res => res.text())
      .then(res => {
        setBlogs(new Array(20).fill(res));
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Home blogs={blogs} />
          </Route>
          <Route path="/blog/:id">
            <BlogContent blogs={blogs} />
          </Route>
          <Route path="/blog">
            <Blog blogs={blogs} />
          </Route>
          <Route path="/about" exact>
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
