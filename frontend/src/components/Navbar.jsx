import { Link } from "react-router-dom";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";

import "./styles/navbar.scss";

function Navbar() {
  return (
    <div>
      <AppBar
        className="navbar"
        sx={{
          backgroundColor: "#080808",
          flexDirection: "row",
          height: "3.5rem",
        }}
      >
        <Button color="inherit" component={Link} to="/" className="navbar-home">
          <h1 className="navbar-home-text">Wiki Wilder</h1>
          <SchoolOutlinedIcon />
        </Button>
        <div className="navbar-pages">
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/">
            <HomeOutlinedIcon className="navbar-icon" />
            ACCUEIL
          </Button>
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/mots-clés">
            <AbcOutlinedIcon className="navbar-icon" />
            MOTS CLÉS
          </Button>
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/basics">
            <CodeOutlinedIcon className="navbar-icon" />
            BASICS
          </Button>
          <div className="navbar-divider" />
        </div>
        <IconButton
          color="inherit"
          component={Link}
          to="/connexion"
          className="navbar-login"
        >
          <AccountCircleOutlinedIcon />
        </IconButton>
      </AppBar>
    </div>
  );
}

export default Navbar;
