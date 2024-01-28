// Import React here
import { useLocation } from "react-router-dom";
import { useState } from "react";

// Import mUI components here
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Pages from "./Pages";

// import additional style here
import "../styles/navbar.scss";

function ToolBarMobile() {
  const cheminUrl = useLocation().pathname;
  const [activeButton, setActiveButton] = useState(cheminUrl);

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
        <Toolbar>
          <Pages
            activeButton={activeButton}
            setActiveButton={setActiveButton}
          />
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default ToolBarMobile;
