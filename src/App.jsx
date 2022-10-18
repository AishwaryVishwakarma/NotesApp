import React from "react";
import Login from "./components/Login/Login";
import StudentDashboard from "./components/Student/StudentDashboard";
import { Routes, Route } from "react-router-dom";
import FacultyDashBoard from "./components/Faculty/FacultyDashBoard";

function App() {
  /*Current user*/
  const [currentUser, setCurrentUser] = React.useState("Student");
  const [loading, setLoading] = React.useState(false);

  /*Change current user*/
  const changeUser = (user) => {
    /*Random delay between 0.8 and 1.5 seconds*/
    const delay = Math.random() * (1500 - 800) + 800;
    setLoading(true);
    setTimeout(() => {
      setCurrentUser(user);
      setLoading(false);
    }, delay);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Login
              currentUser={currentUser}
              changeUser={changeUser}
              isLoading={loading}
            />
          }
        />
        <Route path="/student/*" element={<StudentDashboard />} />
        <Route path="/faculty/*" element={<FacultyDashBoard />} />
      </Routes>
    </>
  );
}

export default App;
