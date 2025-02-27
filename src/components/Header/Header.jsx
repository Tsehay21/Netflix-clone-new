import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./header.module.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NetflixLogo from "../../assets/Images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      className={`${classes.navbar} text-white sticky-top`}
      style={{ backgroundColor: "transparent", padding: "10px 0" }}
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <img src={NetflixLogo} alt="Netflix Logo" width="100" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className={`me-auto ${classes.navLinks}`}>
            {" "}
            <Nav.Link href="#action1" className={classes.navItem}>
              Home
            </Nav.Link>{" "}
            {/* Custom class for each Nav.Link */}
            <Nav.Link href="#action2" className={classes.navItem}>
              TV Show
            </Nav.Link>
            <Nav.Link href="#action2" className={classes.navItem}>
              Movies
            </Nav.Link>
            <Nav.Link href="#action2" className={classes.navItem}>
              Latest
            </Nav.Link>
            <Nav.Link href="#action2" className={classes.navItem}>
              My List
            </Nav.Link>
            <Nav.Link href="#action2" className={classes.navItem}>
              Browse by Languages
            </Nav.Link>
          </Nav>

          <Nav className={`d-flex align-items-right ${classes.iconLinks}`}>
            <Nav.Link href="#">
              <SearchIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <NotificationsNoneIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <AccountBoxIcon />
            </Nav.Link>
            <Nav.Link href="#">
              <ArrowDropDownIcon />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
