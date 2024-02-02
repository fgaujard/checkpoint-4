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

import { navStyleButton, navActiveStyleButton } from "../../mUI_style";

function Pages() {
  const { activeButton } = usePagesContext();

  const isButtonActive = (buttonName) => {
    return activeButton === buttonName;
  };

  return (
    <div className="navbar-pages">
      <div className="navbar-divider navbar-divider-first" />
      <Button
        color="inherit"
        sx={
          isButtonActive("/culture-dev") ? navActiveStyleButton : navStyleButton
        }
        component={Link}
        to="/culture-dev"
      >
        <p className="navbar-pages-text">CULTURE DEV</p>
        <AutoStoriesOutlinedIcon fontSize="small" className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/recap") ? navActiveStyleButton : navStyleButton}
        component={Link}
        to="/recap"
      >
        <p className="navbar-pages-text">Récap</p>
        <FolderOpenOutlinedIcon className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/keywords") ? navActiveStyleButton : navStyleButton}
        component={Link}
        to="/keywords"
      >
        <p className="navbar-pages-text">MOTS-CLÉS</p>
        <AbcOutlinedIcon className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/basics") ? navActiveStyleButton : navStyleButton}
        component={Link}
        to="/basics"
      >
        <p className="navbar-pages-text">BASICS</p>
        <CodeOutlinedIcon className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/packages") ? navActiveStyleButton : navStyleButton}
        component={Link}
        to="/packages"
      >
        <p className="navbar-pages-text">Packages</p>
        <WidgetsOutlinedIcon fontSize="small" className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
      <Button
        color="inherit"
        sx={isButtonActive("/map") ? navActiveStyleButton : navStyleButton}
        component={Link}
        to="/map"
      >
        <p className="navbar-pages-text">MAP</p>
        <HubOutlinedIcon fontSize="small" className="navbar-icon" />
      </Button>
      <div className="navbar-divider" />
    </div>
  );
}

export default Pages;
