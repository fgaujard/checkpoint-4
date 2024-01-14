import { Link } from "react-router-dom";
import { useState } from "react";

import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";

import "./styles/navbar.scss";

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
        <div className="navbar-pages">
          <Button
            color="inherit"
            component={Link}
            to="/"
            className="navbar-home"
          >
            <h1 className="navbar-home-text">Wiki Wilder</h1>
            <SchoolOutlinedIcon />
          </Button>
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/">
            <span>CULTURE DEV</span>
            <AutoStoriesOutlinedIcon fontSize="small" className="navbar-icon" />
          </Button>
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/mots-clés">
            MOTS CLÉS
            <AbcOutlinedIcon className="navbar-icon" />
          </Button>
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/basics">
            BASICS
            <CodeOutlinedIcon className="navbar-icon" />
          </Button>
          <div className="navbar-divider" />
          <Button color="inherit" component={Link} to="/map">
            MAP
            <HubOutlinedIcon fontSize="small" className="navbar-icon" />
          </Button>
          <div className="navbar-divider" />
        </div>
        <IconButton
          color="inherit"
          onClick={handleClick}
          className="navbar-login"
        >
          <AccountCircleOutlinedIcon fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem component={Link} to="/connexion" onClick={handleClose}>
            Login / Register
          </MenuItem>
        </Menu>
      </AppBar>
    </div>
  );
}

export default Navbar;
