import React from "react";
import { FaUserCircle } from "react-icons/fa";
import Notes from "./Notes/Notes";
import Upload from "./Upload/Upload";
import classes from "./StudentDashboard.module.css";
import MyUpload from "./MyUpload/MyUpload";
import Profile from "./Profile/Profile";
import { Routes, Route, Link, useNavigate } from "react-router-dom";

const StudentDashboard = () => {
  /*Navigate to login page*/
  const navigate = useNavigate();

  /*Extract the last part of the url*/
  const lastPartOfUrl = window.location.pathname.split("/").pop();
  // console.log(lastPartOfUrl);

  const [selectedTab, setSelectedTab] = React.useState(() => {
    if (lastPartOfUrl === "student") {
      return "notes";
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
      return `${classes.navItem} ${classes.active}`;
    } else {
      return classes.navItem;
    }
  };

  /*Link Styles*/
  const linkStyles = {
    textDecoration: "none",
    color: "inherit",
    with: "max-content",
    height: "max-content",
    margin: "0 0.8rem",
  };

  return (
    <>
      <div className={classes.studentDashboard__container}>
        <nav className={classes.navbar}>
          <ul className={classes.nav}>
            <FaUserCircle className={classes.icon} />
            <div className={classes.line__break} />
            <li className={classes.title}>
              <h2>Aishwary Vishwakarma</h2>
              <p>320 credits</p>
            </li>
            <Link to="/student" style={linkStyles}>
              <li
                className={getClassName("notes")}
                onClick={() => handleTabChange("notes")}
              >
                Notes
              </li>
            </Link>
            <Link to="/student/upload" style={linkStyles}>
              <li
                className={getClassName("upload")}
                onClick={() => handleTabChange("upload")}
              >
                Upload
              </li>
            </Link>
            <Link to="/student/my-upload" style={linkStyles}>
              <li
                className={getClassName("myuploads")}
                onClick={() => handleTabChange("myuploads")}
              >
                My Uploads
              </li>
            </Link>
            <Link to="/student/profile" style={linkStyles}>
              <li
                className={getClassName("profile")}
                onClick={() => handleTabChange("profile")}
              >
                Profile
              </li>
            </Link>
            <button
              onClick={() => {
                navigate("/");
              }}
              className={classes.logout}
            >
              Logout
            </button>
          </ul>
        </nav>
        <div className={classes.body}>
          <Routes>
            <Route path="/" element={<Notes />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/my-upload" element={<MyUpload />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default StudentDashboard;
