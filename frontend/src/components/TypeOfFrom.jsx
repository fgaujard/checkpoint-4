import { useState } from "react";
import PropTypes from "prop-types";

import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import FilledInput from "@mui/material/FilledInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import EmailIcon from "@mui/icons-material/Email";
import AccountCircle from "@mui/icons-material/AccountCircle";

import "./styles/type-of-form.scss";

function TypeOfForm({ checkbox, setCheckbox }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
    backgroundColor: "#080808",
    transition: "transform 250ms",
    "&:hover": {
      backgroundColor: "#080808",
      transform: "scale(0.9)",
    },
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return checkbox ? (
    <>
      <FormControl sx={styleInput} variant="filled">
        <InputLabel htmlFor="filled-adornment-username">
          Nom d'utilisateur
        </InputLabel>
        <FilledInput
          id="filled-adornment-username"
          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "-4px" }}>
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl sx={styleInput} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">
          Mot de passe
        </InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
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
          }
        />
      </FormControl>
      <div className="button-pos">
        <Button variant="contained" sx={styleButton}>
          Se connecter
        </Button>
      </div>
    </>
  ) : (
    <>
      {/* Nom d'utilisateur */}
      <FormControl sx={styleInput} variant="filled">
        <InputLabel htmlFor="filled-adornment-username">
          Nom d'utilisateur
        </InputLabel>
        <FilledInput
          id="filled-adornment-username"
          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "-4px" }}>
              <AccountCircle />
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Email */}
      <FormControl sx={styleInput} variant="filled">
        <InputLabel htmlFor="filled-adornment-email">Email</InputLabel>
        <FilledInput
          id="filled-adornment-email"
          type="email"
          endAdornment={
            <InputAdornment position="end" sx={{ marginRight: "-4px" }}>
              <EmailIcon />
            </InputAdornment>
          }
        />
      </FormControl>

      {/* Mot de passe */}
      <FormControl sx={styleInput} variant="filled">
        <InputLabel htmlFor="filled-adornment-password">
          Mot de passe
        </InputLabel>
        <FilledInput
          id="filled-adornment-password"
          type={showPassword ? "text" : "password"}
          endAdornment={
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
          }
        />
      </FormControl>

      {/* Confirmation du mot de passe */}
      <FormControl sx={styleInput} variant="filled">
        <InputLabel htmlFor="filled-adornment-confirm-password">
          Confirmer le mot de passe
        </InputLabel>
        <FilledInput
          id="filled-adornment-confirm-password"
          type={showConfirmPassword ? "text" : "password"}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle confirm password visibility"
                onClick={handleClickShowConfirmPassword}
                onMouseDown={(event) => event.preventDefault()}
                edge="end"
              >
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <div className="button-pos">
        <Button variant="contained" sx={styleButton}>
          Créer mon compte
        </Button>
      </div>
    </>
  );
}
TypeOfForm.propTypes = {
  checkbox: PropTypes.bool.isRequired,
  setCheckbox: PropTypes.func.isRequired,
};

export default TypeOfForm;
