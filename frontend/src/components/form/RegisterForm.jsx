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

// Import mUI icons here
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";

// Import errorValidation
import {
  isUsernameError,
  isEmailError,
  isPasswordError,
  isPassMatchError,
} from "../../services/VerifyPostUser";

function RegisterFrom() {
  const [showPassword, setShowPassword] = useState(false);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    passwordConf: "",
  });

  const [formError, setformError] = useState({
    username: {
      message: "",
      value: false,
    },
    email: {
      message: "",
      value: false,
    },
    password: {
      message: "",
      value: false,
    },
    passwordConf: {
      message: "",
      value: false,
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;
    let error = {};

    if (value === "") {
      error = {
        message: "",
        value: false,
      };
    } else {
      switch (name) {
        case "username":
          error = isUsernameError(value);
          break;
        case "email":
          error = isEmailError(value);
          break;
        case "password":
          error = isPasswordError(value);
          break;
        case "passwordConf":
          error = isPassMatchError(newUser.password, value);
          break;
        default:
          break;
      }
    }
    setformError({
      ...formError,
      [name]: error,
    });
  };

  const handleFocus = (event) => {
    const { name } = event.target;

    setformError({
      ...formError,
      [name]: {
        message: "",
      },
    });
  };

  const handleSubmitRegister = async () => {
    const newFormError = {
      ...formError,
      username: isUsernameError(newUser.username),
      email: isEmailError(newUser.email),
      password: isPasswordError(newUser.password),
      passwordConf: isPassMatchError(newUser.password, newUser.passwordConf),
    };
    setformError(newFormError);

    if (
      !newFormError.username.value &&
      !newFormError.email.value &&
      !newFormError.password.value &&
      !newFormError.passwordConf.value
    ) {
      const newValidUser = {
        username: newUser.username,
        email: newUser.email,
        password: newUser.password,
      };

      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BACKEND_URL}/api/register`,
          newValidUser
        );

        if (response && response.status === 201) {
          toast.success("Votre compte à été créé avec succès !", {
            autoClose: 3000,
            hideProgressBar: false,
          });
        }
      } catch (err) {
        toast.error(`Erreur : ${err.response.data.message}`, {
          autoClose: 6000,
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
      console.info(event.key);
      handleSubmitRegister();
    }
  };

  const styleInput = {
    m: 1,
    width: "100%",
    margin: "0 0 1rem 0",
    "& label": {
      color: "black",
    },
    "& label.Mui-focused": {
      color: "black",
    },
    "& .MuiFilledInput-underline:after": {
      borderBottomColor: "black",
    },
    "& .MuiFilledInput-underline.Mui-error:after": {
      borderBottomColor: "black",
    },
    "& .MuiFilledInput-root": {
      borderRadius: "1rem 1rem 0 0",
    },
  };

  const styleButton = {
    borderRadius: "12px",
    backgroundColor: "#292929",
    transition: "transform 250ms",
    "&:hover": {
      backgroundColor: "#292929",
      transform: "scale(0.9)",
    },
  };

  return (
    <>
      {/* Nom d'utilisateur */}
      <FormControl sx={styleInput} variant="filled">
        <TextField
          error={formError.username.value}
          variant="filled"
          label="Nom d'utilisateur"
          id="filled-adornment-username"
          name="username"
          helperText={formError.username.message}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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

      {/* Email */}
      <FormControl sx={styleInput} variant="filled">
        <TextField
          error={formError.email.value}
          variant="filled"
          label="Adresse e-mail"
          id="filled-adornment-email"
          name="email"
          helperText={formError.email.message}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onKeyDown={handleEnterKeyPress}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end" sx={{ marginRight: "-4px" }}>
                <EmailIcon />
              </InputAdornment>
            ),
          }}
        />
      </FormControl>

      {/* Mot de passe */}
      <FormControl sx={styleInput} variant="filled">
        <TextField
          error={formError.password.value}
          variant="filled"
          label="Mot de passe"
          id="filled-adornment-password"
          name="password"
          helperText={formError.password.message}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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

      {/* Confirmation du mot de passe */}
      <FormControl sx={styleInput} variant="filled">
        <TextField
          error={formError.passwordConf.value}
          variant="filled"
          label="Confirmer le mot de passe"
          id="filled-adornment-password-conf"
          name="passwordConf"
          helperText={formError.passwordConf.message}
          type={showPassword ? "text" : "password"}
          onChange={handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
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
      {/* Bonton register */}
      <div
        style={{
          display: "flex",
          justifyContent: "right",
          marginTop: "0.5rem",
        }}
      >
        <Button
          variant="contained"
          sx={styleButton}
          onClick={handleSubmitRegister}
        >
          Créer mon compte
        </Button>
      </div>
      {/* Messages pop-up (toast ou snackbar) */}
      <ToastContainer className="custom-toast" />
    </>
  );
}

export default RegisterFrom;
