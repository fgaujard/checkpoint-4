// Import React here
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import mUI components here
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

// Import mUI icons here
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import AccountCircle from "@mui/icons-material/AccountCircle";

import { styleInput, styleButton } from "../../mUI_style";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(false);

  const [openSession, setOpenSession] = useState({
    username: "",
    password: "",
    checked,
  });

  const handleChange = (event) => {
    setOpenSession({
      ...openSession,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickChecked = () => {
    setChecked((prevChecked) => !prevChecked);
    setOpenSession((prevSession) => ({
      ...prevSession,
      checked: !prevSession.checked,
    }));
  };

  const handleSubmitLogin = async () => {
    if (openSession.username && openSession.password) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/login`,
          openSession,
          {
            withCredentials: true,
          }
        );
        if (response && response.status === 200) {
          toast.success(
            `Connexion réussi ! Bienvenue ${openSession.username}`,
            {
              autoClose: 1500,
              hideProgressBar: false,
            },
            setTimeout(() => {
              window.location.href = `/`;
            }, 1500)
          );
        }
      } catch (err) {
        toast.error("Nom d'utilisateur ou mot de passe incorrect", {
          autoClose: 3000,
          hideProgressBar: false,
        });
      }
    } else {
      toast.error("Une erreur est suvenue", {
        autoClose: 3000,
        hideProgressBar: false,
      });
    }
  };

  const handleEnterKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmitLogin();
    }
  };

  const usernameError = {
    message: "",
    value: false,
  };

  const passwordError = {
    message: "",
    value: false,
  };

  return (
    <>
      {/* Nom d'utilisateur */}
      <FormControl sx={styleInput} variant="filled">
        <TextField
          error={usernameError.value}
          variant="filled"
          label="Nom d'utilisateur"
          id="filled-adornment-username"
          name="username"
          helperText={usernameError.message}
          onChange={handleChange}
          onKeyDown={handleEnterKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ marginRight: "-4px" }}>
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      {/* Mot de passe */}
      <FormControl sx={styleInput} variant="filled">
        <TextField
          error={passwordError.value}
          variant="filled"
          label="Mot de passe"
          id="filled-adornment-password"
          name="password"
          helperText={passwordError.message}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          onKeyDown={handleEnterKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={(event) => event.preventDefault()}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </FormControl>
      {/* Bouton login */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "0.5rem",
        }}
      >
        <FormControlLabel
          name="keepCo"
          control={<Checkbox checked={checked} onClick={handleClickChecked} />}
          label="Rester connecté"
          labelPlacement="end"
        />
        <Button
          variant="contained"
          sx={styleButton}
          onClick={handleSubmitLogin}
        >
          Se connecter
        </Button>
      </div>
      <ToastContainer className="custom-toast" />
    </>
  );
}

export default LoginForm;
