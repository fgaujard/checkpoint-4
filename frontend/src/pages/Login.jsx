// Import React here
import { useState } from "react";

// Import my components
import LoginForm from "../components/form/LoginForm";
import RegisterFrom from "../components/form/RegisterForm";

import { usePagesContext } from "../contexts/PagesContext";

// import additional style here
import "./styles/login.scss";

function Login() {
  const [checkbox, setCheckbox] = useState(true);
  const { setActiveButton } = usePagesContext();
  setActiveButton("/desabled");

  const handleChange = () => {
    return !checkbox ? setCheckbox(true) : setCheckbox(false);
  };

  return (
    <div className="body-content-center">
      <div className="wrapper">
        <div className="form-container">
          <div className="slide-controls">
            <input
              type="radio"
              name="slide"
              id="login"
              checked={checkbox === true}
              onChange={handleChange}
            />
            <input
              type="radio"
              name="slide"
              id="signup"
              checked={checkbox === false}
              onChange={handleChange}
            />
            <label htmlFor="login" className="slide login">
              Connexion
            </label>
            <label htmlFor="signup" className="slide signup">
              Inscription
            </label>
            <div className="slider-tab" />
          </div>
        </div>
        {checkbox ? <LoginForm /> : <RegisterFrom />}
      </div>
    </div>
  );
}

export default Login;
