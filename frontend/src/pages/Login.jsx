import { useState } from "react";

import TypeOfForm from "../components/TypeOfFrom";

import "./styles/login.scss";

function Login() {
  const [checkbox, setCheckbox] = useState(true);

  const handleChange = () => {
    // document.getElementsByTagName("form")[2].reset();
    // if (!checkbox) resetAllErrMsgSign();
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
        <TypeOfForm checkbox={checkbox} setCheckbox={setCheckbox} />
      </div>
    </div>
  );
}

export default Login;
