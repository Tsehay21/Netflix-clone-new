import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import netflixFooterStyle from "./footer.module.css";

const Footer = () => {
  return (
    <div className={netflixFooterStyle["footer_outer_container"]}>
      <div className={netflixFooterStyle["footer_inner_container"]}>
        <div className={netflixFooterStyle["footer_icons"]}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={netflixFooterStyle["footer_data"]}>
          <div>
            <ul>
              <li>Audio Description</li>
              <li>Investor Relations</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Terms of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className={netflixFooterStyle["service_code"]}>
          <p>Service Code</p>
        </div>
        <div className={netflixFooterStyle["copy-write"]}>
          &copy; 19997-2024 Netflix, Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
