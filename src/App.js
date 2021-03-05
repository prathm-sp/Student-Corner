import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./User/Navbar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import User_Home_page from "./User/User_Home_page";
import { toast } from "react-toastify";
import "./App.css";
import Job from "./User/Job";
import Create_job_profile from "./User/Create_job_profile ";
import User_Dashboards from "./User/User_Dashboards";
import Class_list from "./User/class_list";
import Class_profile from "./User/Class_profile";
import Recruiter_Home_page from "./Recruiter/Recruiter_Home_page";
import Profile_create from "./Recruiter/Profile_create";
import Job_Profile_create from "./Recruiter/Job_Profile_create";
import Recruiter_Class_list from "./Recruiter/Recruiter_class_list";
import Recruiter_Class_profile from "./Recruiter/Recruiter_Class_profile";
import Recruiter_Dashboards from "./Recruiter/Recruiter_Dashboards";
import Navbar2 from "./Recruiter/Navbar_2";
import Job_Dashboards from "./Recruiter/Job_Dashboards";
import Axios from "../src/axios";
import Footer from "./User/Footer";
import action from "./Redux/Action";

toast.configure();

const { setuser } = action;
function App(props) {
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (!token) return null;
    else {
      Axios.get("/auth/verifyAccessToken", {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((res) => {
          console.log(res);
          props.setuser(res.data);
        })
        .catch((err) => {
          localStorage.clear();
          return null;
        });
    }
  }, []);
  console.log(props.user);
  return (
    <div>
      <Router>
        <Switch>
          {/* User */}
          <Route
            exact
            path="/User_Home_page"
            render={() => {
              console.log(props?.user?.role);
              if (props?.user?.role == "Recruiter") {
                return <Redirect to="/Recruiter_Home_page" />;
              } else {
                return (
                  <>
                    <Navbar />
                    <User_Home_page />
                    <Footer />
                  </>
                );
              }
            }}
          />

          <Route
            exact
            path="/Recruiter_Home_page"
            render={() => {
              console.log(props?.user?.role);
              if (props?.user?.role == "Applicant") {
                return <Redirect to="/User_Home_page" />;
              } else {
                return (
                  <>
                    <Navbar2 />
                    <User_Home_page />
                    <Footer />
                  </>
                );
              }
            }}
          />
          <Route
            exact
            path="/"
            render={() => {
              if (props?.user?.role == "Applicant") {
                return <Redirect to="/User_Home_page" />;
              } else if (props?.user?.role == "Recruiter") {
                return <Redirect to="/Recruiter_Home_page" />;
              } else
                return (
                  <>
                    <Navbar />
                    <User_Home_page />
                    <Footer />
                  </>
                );
            }}
          />

          <Route
            exact
            path="/class_list"
            render={() => {
              if (props?.user?.role == "Applicant") {
                return (
                  <>
                    {" "}
                    <Navbar />
                    <Class_list />
                    <Footer />
                  </>
                );
              } else if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Class_list />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          />

          <Route
            exact
            path="/Class_profile"
            render={() => {
              if (props?.user?.role == "Applicant") {
                return (
                  <>
                    {" "}
                    <Navbar />
                    <Class_profile />
                    <Footer />
                  </>
                );
              } else if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Class_profile />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          />

          <Route
            exact
            path="/User_Dashboards"
            render={() => {
              if (props?.user?.role == "Applicant") {
                return (
                  <>
                    {" "}
                    <Navbar />
                    <User_Dashboards />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          />

          <Route
            exact
            path="/Job"
            render={() => {
              if (props?.user?.role == "Applicant") {
                return (
                  <>
                    {" "}
                    <Navbar />
                    <Job />
                    <Footer />
                  </>
                );
              } else if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Job />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>
          <Route
            exact
            path="/Create_job_profile"
            render={() => {
              if (props?.user?.role == "Applicant") {
                return (
                  <>
                    {" "}
                    <Navbar />
                    <Create_job_profile />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>
          {/* Recruiter */}

          <Route
            exact
            path="/Profile_create"
            render={() => {
              if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Profile_create />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          />

          <Route
            exact
            path="/Job_Profile_create"
            render={() => {
              if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Job_Profile_create />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>
          <Route
            exact
            path="/Recruiter_Dashboards"
            render={() => {
              if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Recruiter_Dashboards />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>
          <Route
            exact
            path="/Recruiter_class_list"
            render={() => {
              if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Recruiter_Class_list />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>
          <Route
            exact
            path="/Recruiter_Class_profile"
            render={() => {
              if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Recruiter_Class_profile />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>

          <Route
            exact
            path="/Job_Dashboards"
            render={() => {
              if (props?.user?.role == "Recruiter") {
                return (
                  <>
                    {" "}
                    <Navbar2 />
                    <Job_Dashboards />
                    <Footer />
                  </>
                );
              } else {
                toast(`Please Login first`, {
                  position: toast.POSITION.TOP_CENTER,
                  autoClose: 3000,
                });
                return <Redirect to="/" />;
              }
            }}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}
function mapstatetoprops(state) {
  return {
    user: state.user,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    setuser: (data) => {
      dispatch(setuser(data));
    },
  };
}

export default connect(mapstatetoprops, mapDispatchToProps)(App);
