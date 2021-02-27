import React, { useEffect } from "react";
import Navbar from "./User/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import User_Home_page from "./User/User_Home_page";
import "./App.css";
import User_Dashboards from "./User/User_Dashboards";
import Class_list from "./User/class_list";
import Class_profile from "./User/Class_profile";
import Recruiter_Home_page from "./Recruiter/Recruiter_Home_page";
import Profile_create from "./Recruiter/Profile_create";
import Recruiter_Class_list from "./Recruiter/Recruiter_class_list";
import Recruiter_Class_profile from "./Recruiter/Recruiter_Class_profile";
import Recruiter_Dashboards from "./Recruiter/Recruiter_Dashboards";
import Navbar2 from "./Recruiter/Navbar_2";
import Axios from "./axios";

function App() {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return null;
    else {
      Axios.get("/auth/verifyAccessToken", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  }, []);
  return (
    <div>
      <Router>
        <Switch>
          {/* User */}
          <Route exact path="/">
            <Navbar />
            <User_Home_page />
          </Route>

          <Route exact path="/User_Home_page">
            <Navbar />
            <User_Home_page />
          </Route>
          <Route exact path="/class_list">
            <Navbar />
            <Class_list />
          </Route>
          <Route exact path="/Class_profile">
            <Navbar />
            <Class_profile />
          </Route>
          <Route exact path="/User_Dashboards">
            <Navbar />
            <User_Dashboards />
          </Route>
          {/* Recruiter */}
          <Route exact path="/Recruiter_Home_page">
            <Navbar2 />
            <Recruiter_Home_page />
          </Route>
          <Route exact path="/Profile_create">
            <Navbar2 />
            <Profile_create />
          </Route>
          <Route exact path="/Recruiter_Dashboards">
            <Navbar2 />
            <Recruiter_Dashboards />
          </Route>
          <Route exact path="/Recruiter_class_list">
            <Navbar2 />
            <Recruiter_Class_list />
          </Route>
          <Route exact path="/Recruiter_Class_profile">
            <Navbar2 />
            <Recruiter_Class_profile />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
