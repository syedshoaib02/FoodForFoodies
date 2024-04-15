import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import PhoneIcon from '@mui/icons-material/Phone';
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon  /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon /> <PhoneIcon />
      </div>
      <p> &copy;This Page rights are Reserved by Syed Shoaib</p>
    </div>
  );
}

export default Footer;
