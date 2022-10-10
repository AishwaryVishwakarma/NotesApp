import React from "react";
import { AiOutlineUser, AiOutlineEye } from "react-icons/ai";
import Loading from "../Loading/Loading";
import classes from "./Login.module.css";

const Login = (props) => {
  /*User data state*/
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = React.useState(false);

  /*Handle input change and checkbox*/
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    type === "checkbox"
      ? setUser({ ...user, [name]: checked })
      : setUser({ ...user, [name]: value });
    //   console.log(user)
  };

  /*Change password visibility*/
  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  /*Determine Current User*/
  const currentUser = props.currentUser === "Student" ? "Student" : "Faculty";

  /*Change currentUSer*/
  const changeCurrentUser = () => {
    props.changeUser(currentUser === "Student" ? "Faculty" : "Student");
  };

  /*Handle form submit*/
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  };

  return (
    <div className={classes.login}>
      {
        /*Loading component*/
        props.isLoading ? (
          <Loading type={"bars"} color={"#066cbf"} height={70} width={70} />
        ) : (
          /*Login form*/
          <div className={classes.login__container}>
            <h1 className={classes.login__title}>Login</h1>
            <p className={classes.login__subtitle}>{currentUser} Login</p>
            <form className={classes.login__form} onSubmit={handleSubmit}>
              <label htmlFor="username" className={classes.form__label}>
                <p>Username</p>
                <div className={classes.form__inputContainer}>
                  <input
                    type="text"
                    placeholder="
                    Enter your username"
                    className={classes.form__input}
                    name="username"
                    id="username"
                    value={user.username}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <AiOutlineUser className={classes.form__icon} />
                </div>
              </label>
              <label htmlFor="password" className={classes.form__label}>
                <p>Password</p>
                <div className={classes.form__inputContainer}>
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={classes.form__input}
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleChange}
                    autoComplete="off"
                  />
                  <AiOutlineEye
                    className={classes.form__icon}
                    onClick={handleShowPassword}
                    style={{ cursor: "pointer" }}
                  />
                </div>
              </label>
              <div className={classes.bottom__section}>
                <label
                  htmlFor="rememberMe"
                  className={classes.rememberMe__section}
                >
                  <input
                    type="checkbox"
                    name="rememberMe"
                    id="rememberMe"
                    value={user.rememberMe}
                    onChange={handleChange}
                  />
                  <p>Remember Me</p>
                </label>
                <h4 className={classes.forgot__password}>
                  <a href="#">Forgot Password?</a>
                </h4>
              </div>
              <button type="submit" className={classes.login__button}>
                Login
              </button>
            </form>
            <div className={classes.footer__section}>
              <p>
                Not {currentUser}?{" "}
                <a onClick={changeCurrentUser} className={classes.footer__link}>
                  {currentUser === "Student" ? "Faculty" : "Student"} Login
                </a>
              </p>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default Login;
