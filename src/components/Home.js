import React from "react";
import { Link } from "react-router-dom";
import Ban from "../assets/Ban.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${Ban})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>Shahi Darbar </h1>
        <p>THE BEST IS A CLICK AWAY</p>
        <Link to="/Menu">
        <button> ORDER NOW </button>
        </Link>
          
        
      </div>
    </div>
  );
}

export default Home;
