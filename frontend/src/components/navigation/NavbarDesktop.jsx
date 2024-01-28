// Import React here
import { Link } from "react-router-dom";

// Import mUI components here
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";

// Import mUI icons here
import JavascriptOutlinedIcon from "@mui/icons-material/JavascriptOutlined";

import { usePagesContext } from "../../contexts/PagesContext";

// Import my personnal components here
import Pages from "./Pages";
import AccountMenu from "./AccountsMenu";

// import additional style here
import "../styles/navbar.scss";

function Navbar() {
  const { handleClickPage } = usePagesContext();

  const styleButton = {
    minWidth: "1rem",
    backgroundColor: "#292929",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
  };

  return (
    <div className="navbar-desktop">
      <AppBar
        className="navbar"
        sx={{
          backgroundColor: "#292929",
          flexDirection: "row",
          height: "3.5rem",
        }}
      >
        <div className="navbar-pages">
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
              <JavascriptOutlinedIcon fontSize="large" />
            </div>
          </Button>
          <Pages />
        </div>
        <AccountMenu />
      </AppBar>
    </div>
  );
}

export default Navbar;
