import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classes from "./ChangePassword.module.css";

const ChangePassword = () => {
  /*State to toggle password form visibility*/
  const [showPasswordForm, setShowPasswordForm] = React.useState(false);

  /*Password state*/
  const [password, setPassword] = React.useState({
    newPassword: "",
    confirmPassword: "",
  });

  /*Password visibility state*/
  const [passwordVisibility, setPasswordVisibility] = React.useState({
    newPassword: false,
    confirmPassword: false,
  });

  /*Password Input Change Handler*/
  const handlePasswordChange = (e) => {
    setPassword((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  /*Toggle password visibility function*/
  const togglePasswordVisibility = (password) => {
    setPasswordVisibility((prev) => {
      return {
        ...prev,
        [password]: !prev[password],
      };
    });
    console.log(passwordVisibility);
  };

  /*Submit password change handler*/
  const handleSubmitPasswordChange = (e) => {
    e.preventDefault();
    console.log(password);
    setPassword({
      newPassword: "",
      confirmPassword: "",
    });
    /*Lose focus from all input*/
    document.querySelectorAll("input").forEach((input) => {
      input.blur();
    });
  };

  return (
    <div className={classes.changePassword__container}>
      <form className={classes.change__passwordInput__section} onSubmit={handleSubmitPasswordChange}>
        <label htmlFor="newPassword">New Password</label>
        <div className={classes.input__field__password}>
          <input
            type={passwordVisibility.newPassword ? "text" : "password"}
            id="newPassword"
            name="newPassword"
            placeholder="Enter new password"
            value={password.newPassword}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
          {!passwordVisibility.newPassword ? (
            <AiOutlineEye
              className={classes.eye__icon}
              onClick={() => togglePasswordVisibility("newPassword")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={classes.eye__icon}
              onClick={() => togglePasswordVisibility("newPassword")}
            />
          )}
        </div>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <div className={classes.input__field__confirmPassword}>
          <input
            type={passwordVisibility.confirmPassword ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm new password"
            value={password.confirmPassword}
            onChange={handlePasswordChange}
            autoComplete="off"
          />
          {!passwordVisibility.confirmPassword ? (
            <AiOutlineEye
              className={classes.eye__icon}
              onClick={() => togglePasswordVisibility("confirmPassword")}
            />
          ) : (
            <AiOutlineEyeInvisible
              className={classes.eye__icon}
              onClick={() => togglePasswordVisibility("confirmPassword")}
            />
          )}
        </div>
        <button type="submit" className={classes.submit__button}>
          Change Password
        </button>
      </form>
    </div>
  );
};

export default ChangePassword;
