// Import React here
import { Link } from "react-router-dom";
import { useState } from "react";
import PropTypes from "prop-types";

// Import mUI components here
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

// Import mUI icons here
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountBoxOutlinedIcon from "@mui/icons-material/AccountBoxOutlined";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";

function AccountMenu({ isLogin, isAdmin, username }) {
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorElUser(null);
  };

  const styleButton = {
    minWidth: "1rem",
    backgroundColor: "#292929",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.15)",
    },
  };

  return (
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
        {isLogin && (
          <Typography sx={{ marginLeft: "1.2rem", padding: "0.5rem 0" }}>
            {username}
          </Typography>
        )}
        {!isLogin && (
          <MenuItem component={Link} to="/login" onClick={handleCloseMenu}>
            <KeyOutlinedIcon sx={{ marginRight: "1rem" }} />
            Login / Register
          </MenuItem>
        )}
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

        <MenuItem onClick={handleCloseMenu}>
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
