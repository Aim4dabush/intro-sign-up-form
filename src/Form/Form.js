import React from "react";

//components
import Advertisement from "./Advertisement/Advertisement";

//hooks
import { useInput } from "../Hooks/UseInput";

//styles
import "./Form.scss";

function Form() {
  const {
    value: firstName,
    valueIsValid: firstNameIsValid,
    error: firstNameError,
    handleOnChange: handleFirstNameChange,
    handleOnBlur: handleFirstNameBlur,
    reset: resetFirstName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: lastName,
    valueIsValid: lastNameIsValid,
    error: lastNameError,
    handleOnChange: handleLastNameChange,
    handleOnBlur: handleLastNameBlur,
    reset: resetLastName,
  } = useInput((value) => value.trim() !== "");
  const {
    value: email,
    valueIsValid: emailIsValid,
    error: emailError,
    handleOnChange: handleEmailChange,
    handleOnBlur: handleEmailBlur,
    reset: resetEmail,
  } = useInput((value) => value.includes("@"));
  const {
    value: password,
    valueIsValid: passwordIsValid,
    error: passwordError,
    handleOnBlur: handlePasswordBlur,
    handleOnChange: handlePasswordChange,
    reset: resetPassword,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (formIsValid) {
      const user = {
        firstName,
        lastName,
        email,
        password,
      };
      console.log(user);
      resetFirstName();
      resetLastName();
      resetEmail();
      resetPassword();
    }
  };

  const firstNameClass = firstNameError ? "error" : null;
  const lastNameClass = lastNameError ? "error" : null;
  const emailClass = emailError ? "error" : null;
  const passwordClass = passwordError ? "error" : null;

  return (
    <div className="form-container">
      <Advertisement />
      <form onSubmit={handleOnSubmit}>
        <div className="form-control">
          <input
            className={firstNameClass}
            placeholder="First Name"
            type="text"
            value={firstName}
            onBlur={handleFirstNameBlur}
            onChange={handleFirstNameChange}
          />
          {firstNameError && (
            <p className="error-text">
              <i>First Name cannot be empty</i>
            </p>
          )}
        </div>
        <div className="form-control">
          <input
            className={lastNameClass}
            placeholder="Last Name"
            type="text"
            value={lastName}
            onBlur={handleLastNameBlur}
            onChange={handleLastNameChange}
          />
          {lastNameError && (
            <p className="error-text">Last Name cannot be empty</p>
          )}
        </div>
        <div className="form-control">
          <input
            className={emailClass}
            placeholder="Email Address"
            type="email"
            value={email}
            onBlur={handleEmailBlur}
            onChange={handleEmailChange}
          />
          {emailError && (
            <p className="error-text">Looks like this is not an email</p>
          )}
        </div>
        <div className="form-control">
          <input
            className={passwordClass}
            placeholder="Password"
            type="password"
            value={password}
            onBlur={handlePasswordBlur}
            onChange={handlePasswordChange}
          />
          {passwordError && (
            <p className="error-text">Password cannot be empty</p>
          )}
        </div>
        <button disabled={!formIsValid}>CLAIM YOUR FREE TRIAL</button>
        <p>
          By clicking the button you are agreeing to our{" "}
          <span>Terms and Services</span>
        </p>
      </form>
    </div>
  );
}

export default Form;
