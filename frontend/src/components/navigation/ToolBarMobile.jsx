import PropTypes from "prop-types";

// Import mUI components here
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Pages from "./Pages";

import { usePagesContext } from "../../contexts/PagesContext";

// import additional style here
import "../styles/navbar.scss";

function ToolBarMobile({ isLogin }) {
  const { setActiveButton, activeButton } = usePagesContext();

  return (
    <div className="mobile-mode">
      <AppBar
        position="fixed"
        className="navbar"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "#292929",
          flexDirection: "row",
          height: "3.5rem",
          justifyContent: "center",
        }}
      >
        {isLogin && (
          <Toolbar>
            <Pages
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </Toolbar>
        )}
      </AppBar>
    </div>
  );
}
ToolBarMobile.propTypes = {
  isLogin: PropTypes.bool.isRequired,
};

export default ToolBarMobile;
