// Import React here
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// Import mUI components here
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Import mUI icons here
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

import { usePagesContext } from "../../contexts/PagesContext";

function AccountMenu({ isLogin, isAdmin, username }) {
  const { setCheckbox } = usePagesContext();
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = (event) => {
    if (event.target.name === "login") setCheckbox(true);
    else setCheckbox(false);
    setAnchorElUser(null);
  };

  const handleClickLogOut = () => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/api/logout`, {
        withCredentials: true,
      })
      .then(() => {
        window.location.href = "/login";
      });
  };

  const styleButton = {
    minWidth: "1rem",
    backgroundColor: "#292929",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
  };

  return !isLogin ? (
    <div style={{ display: "flex", alignItems: "center", marginRight: "1rem" }}>
      <div className="navbar-divider" />
      <Button
        name="login"
        color="inherit"
        sx={styleButton}
        component={Link}
        to="/login"
        onClick={handleCloseMenu}
      >
        Login
      </Button>
      <div className="navbar-divider" />
      <Button
        name="register"
        color="inherit"
        sx={styleButton}
        component={Link}
        to="/login"
        onClick={handleCloseMenu}
      >
        Register
      </Button>
    </div>
  ) : (
    <>
      <IconButton
        color="inherit"
        sx={styleButton}
        onClick={handleOpenMenu}
        className="navbar-login"
      >
        <AccountCircleOutlinedIcon fontSize="large" />
      </IconButton>
      <Menu
        anchorEl={anchorElUser}
        open={Boolean(anchorElUser)}
        onClose={handleCloseMenu}
      >
        <Typography sx={{ marginLeft: "1.2rem", padding: "0.5rem 0" }}>
          {username}
        </Typography>

        <MenuItem component={Link} to="/profil" onClick={handleCloseMenu}>
          <AccountBoxOutlinedIcon sx={{ marginRight: "1rem" }} />
          Mon Profil
        </MenuItem>

        {isAdmin && (
          <MenuItem
            component={Link}
            to="/administration"
            onClick={handleCloseMenu}
          >
            <AdminPanelSettingsOutlinedIcon sx={{ marginRight: "1rem" }} />
            Administration
          </MenuItem>
        )}

        <MenuItem onClick={handleClickLogOut}>
          <LogoutOutlinedIcon sx={{ marginRight: "1rem" }} />
          Deconnexion
        </MenuItem>
      </Menu>
    </>
  );
}
AccountMenu.propTypes = {
  isLogin: PropTypes.bool.isRequired,
  isAdmin: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired,
};

export default AccountMenu;
