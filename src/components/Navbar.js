import React, { useState } from "react";
import Logo from "../assets/Navbar.png";
import { Link } from "react-router-dom";
import ReorderIcon from "@material-ui/icons/Reorder";
import "../styles/Navbar.css";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar"> <h2>Shahi<br/>Darbar</h2>
      <div className="leftSide" id={openLinks ? "open" : "close"}>
       
        <img src={Logo} />
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/menu"> Menu </Link>
          <Link to="/about"> About </Link>
          <Link to="/contact"> Contact </Link>
         <Link to="/DemoCarousel"> Gallery</Link>
         <Link to="/Blogs"> Blogs</Link>
         <Link to="/Customers"> Customers</Link>
         <Link to="/New">Upcoming Items</Link>

        </div>
      </div>
      <div className="rightSide">
        <Link to="/"> Home </Link>
        <Link to="/menu"> Menu </Link>
        <Link to="/about"> About </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/DemoCarousel"> Gallery</Link>
        <Link to="/Blogs"> Blogs</Link>
        <Link to="/Customers"> Customers</Link>
        <Link to="/New">Upcoming Items</Link>
        <button onClick={toggleNavbar}>
          <ReorderIcon />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
