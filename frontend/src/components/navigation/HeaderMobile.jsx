// Import React here
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// Import mUI components here
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

// Import mUI icons here

import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";

import AccountMenu from "./AccountsMenu";

import { usePagesContext } from "../../contexts/PagesContext";

// import additional style here
import "../styles/navbar.scss";

function HeaderMobile({ isLogin, isAdmin, username }) {
  const { handleClickPage } = usePagesContext();

  const styleButton = {
    minWidth: "1rem",
    backgroundColor: "#292929",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
  };

  return (
    <div className="mobile-mode">
      <AppBar
        className="navbar"
        sx={{
          backgroundColor: "#292929",
          flexDirection: "row",
          height: "3.5rem",
        }}
      >
        {isLogin && <div style={{ width: "53px" }} />}
        <Button
          color="inherit"
          sx={styleButton}
          component={Link}
          to="/"
          className="navbar-home"
          onClick={() => handleClickPage("/desabled")}
        >
          <h1 className="navbar-home-text">Wiki Wilder</h1>
          <div className="navbar-home-icon">
            <SchoolOutlinedIcon />
          </div>
        </Button>
        <AccountMenu isLogin={isLogin} isAdmin={isAdmin} username={username} />
      </AppBar>
    </div>
  );
}
HeaderMobile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default HeaderMobile;
