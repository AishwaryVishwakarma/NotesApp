import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import classes from "./FacultyDashBoard.module.css";
import Upload from "./Upload/Upload";
import MyUpload from "./MyUpload/MyUpload";
import Review from "./Review/Review";
import Approve from "./Approve/Approve";
import Profile from "./Profile/Profile";
import { useNavigate } from "react-router-dom";

const linkStyle = {
  textDecoration: "none",
  color: "inherit",
  width: "100%",
  height: "max-content",
  margin: "0.5rem 0",
};

const FacultyDashBoard = () => {
  /*Navigate to login page*/
  const navigate = useNavigate();

  /*Extract the last part of the url*/
  const lastPartOfUrl = window.location.pathname.split("/").pop();

  /*State to manage class of the active link*/
  const [selectedTab, setSelectedTab] = React.useState(() => {
    if (lastPartOfUrl === "faculty") {
      return "upload";
    } else {
      return lastPartOfUrl;
    }
  });

  const handleTabChange = (lastPartOfUrl) => {
    setSelectedTab(lastPartOfUrl);
  };

  /*Function to change className based on selected tab*/
  const getClassName = (tab) => {
    if (tab === selectedTab) {
      return `${classes.active}`;
    }
  };

  return (
    <>
      <div className={classes.facultyDashboard__container}>
        <div className={classes.header}>
          <h1>Faculty Name</h1>
        </div>
        <div className={classes.container}>
          <div className={classes.sidebar}>
            <nav className={classes.navbar}>
              <ul>
                <Link to="/faculty" style={linkStyle}>
                  <li
                    className={getClassName("upload")}
                    onClick={() => handleTabChange("upload")}
                  >
                    Upload
                  </li>
                </Link>
                <Link to="/faculty/my-upload" style={linkStyle}>
                  <li
                    className={getClassName("my-upload")}
                    onClick={() => handleTabChange("my-upload")}
                  >
                    My Upload
                  </li>
                </Link>
                <Link to="/faculty/approve" style={linkStyle}>
                  <li
                    className={getClassName("approve")}
                    onClick={() => handleTabChange("approve")}
                  >
                    Approve
                  </li>
                </Link>
                <Link to="/faculty/review" style={linkStyle}>
                  <li
                    className={getClassName("review")}
                    onClick={() => handleTabChange("review")}
                  >
                    Review
                  </li>
                </Link>
                <Link to="/faculty/profile" style={linkStyle}>
                  <li
                    className={getClassName("profile")}
                    onClick={() => handleTabChange("profile")}
                  >
                    Profile
                  </li>
                </Link>
                <button
                  className={classes.logout__button}
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </ul>
            </nav>
          </div>
          <div className={classes.content}>
            <Routes>
              <Route path="/" element={<Upload />} />
              <Route path="/my-upload" element={<MyUpload />} />
              <Route path="/approve" element={<Approve />} />
              <Route path="/review" element={<Review />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyDashBoard;
