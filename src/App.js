import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery"
import Customers from "./components/Customers"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DemoCarousel from "./components/DemoCarousel";
import { Blogs } from "./components/Blogs";
import New from "./components/New";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/Gallery" exact component={Gallery} />
            <Route path="/DemoCarousel" exact component={DemoCarousel} /> 
            <Route path="/Blogs" exact component={Blogs} /> 
            <Route path="/Customers" exact component={Customers} /> 
            <Route path="/New" exact component={New } /> 



        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
