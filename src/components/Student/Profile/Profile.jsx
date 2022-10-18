import React from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import classes from "./Profile.module.css";

const Profile = () => {
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

  /*Funtion to toggle passwrod form visibility*/
  const togglePasswordForm = () => {
    setShowPasswordForm((prevState) => !prevState);
  };

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

  return (
    <div className={classes.profile__container}>
      <div className={classes.profile__section}>
        <div className={classes.profile__section__title}>
          <p>Aishwary Vishwakarma</p>
        </div>
        <div className={classes.profile__section__content}>
          <div className={classes.profile__section__content__item}>
            <p>USN</p>
            <p>1RV19ET006</p>
          </div>
          <div className={classes.profile__section__content__item}>
            <p>Branch</p>
            <p>Computer Science</p>
          </div>
          <div className={classes.profile__section__content__item}>
            <p>Year</p>
            <p>2023</p>
          </div>
          <div className={classes.profile__section__content__item}>
            <p>College</p>
            <p>RV College of Engineering</p>
          </div>
          <div className={classes.profile__section__content__item}>
            <p>University</p>
            <p>VTU</p>
          </div>
          <div className={classes.profile__section__content__item}>
            <p>City</p>
            <p>Bangalore</p>
          </div>
        </div>
        <div className={classes.line__break} />
        {showPasswordForm ? (
          <form className={classes.change__passwordInput__section}>
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
          </form>
        ) : (
          ""
        )}
        <div className={classes.change__password}>
          <button onClick={togglePasswordForm}>
            {showPasswordForm ? "Submit" : "Change Password"}
          </button>
          {showPasswordForm && (
            <button onClick={togglePasswordForm}>Cancel</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
