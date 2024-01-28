// Import React here
import { Link } from "react-router-dom";

// Import mUI components here
import Button from "@mui/material/Button";

// Import mUI icons here
import AutoStoriesOutlinedIcon from "@mui/icons-material/AutoStoriesOutlined";
import AbcOutlinedIcon from "@mui/icons-material/AbcOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import FolderOpenOutlinedIcon from "@mui/icons-material/FolderOpenOutlined";
import WidgetsOutlinedIcon from "@mui/icons-material/WidgetsOutlined";

import { usePagesContext } from "../../contexts/PagesContext";

function Pages() {
  const { activeButton, handleClickPage } = usePagesContext();

  const isButtonActive = (buttonName) => {
    return activeButton === buttonName;
  };

  const styleButton = {
    minWidth: "1rem",
    backgroundColor: "#292929",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
  };

  const activeStyleButton = {
    minWidth: "1rem",
    color: "#292929",
    backgroundColor: "#f6f6f6",
    "&:hover": {
      backgroundColor: "#f6f6f6",
    },
  };

  return (
    <div className="navbar-pages">
      <div className="navbar-divider navbar-divider-first" />
      <Button
        color="inherit"
        sx={isButtonActive("/culture-dev") ? activeStyleButton : styleButton}
        component={Link}
        to="/culture-dev"
        onClick={() => handleClickPage("/culture-dev")}
      >
        <p className="navbar-pages-text">CULTURE DEV</p>
        <AutoStoriesOutlinedIcon fontSize="small" className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/recap") ? activeStyleButton : styleButton}
        component={Link}
        to="/recap"
        onClick={() => handleClickPage("/recap")}
      >
        <p className="navbar-pages-text">Récap</p>
        <FolderOpenOutlinedIcon className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/keywords") ? activeStyleButton : styleButton}
        component={Link}
        to="/keywords"
        onClick={() => handleClickPage("/keywords")}
      >
        <p className="navbar-pages-text">MOTS CLÉS</p>
        <AbcOutlinedIcon className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/basics") ? activeStyleButton : styleButton}
        component={Link}
        to="/basics"
        onClick={() => handleClickPage("/basics")}
      >
        <p className="navbar-pages-text">BASICS</p>
        <CodeOutlinedIcon className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/packages") ? activeStyleButton : styleButton}
        component={Link}
        to="/packages"
        onClick={() => handleClickPage("/packages")}
      >
        <p className="navbar-pages-text">Packages</p>
        <WidgetsOutlinedIcon fontSize="small" className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/map") ? activeStyleButton : styleButton}
        component={Link}
        to="/map"
        onClick={() => handleClickPage("/map")}
      >
        <p className="navbar-pages-text">MAP</p>
        <HubOutlinedIcon fontSize="small" className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
    </div>
  );
}

export default Pages;
