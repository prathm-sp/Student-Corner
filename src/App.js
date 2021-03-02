import React, { useEffect } from "react";
import { connect } from "react-redux";
import Navbar from "./User/Navbar"
import { BrowserRouter as Router,Switch,Route} from "react-router-dom";
import User_Home_page from "./User/User_Home_page"
import "./App.css"
import Job from "./User/Job";
import Create_job_profile from "./User/Create_job_profile "
import User_Dashboards from "./User/User_Dashboards";
import Class_list from './User/class_list';
import Class_profile from './User/Class_profile';
import Recruiter_Home_page from "./Recruiter/Recruiter_Home_page"
import Profile_create from './Recruiter/Profile_create';
import Job_Profile_create from './Recruiter/Job_Profile_create';
import Recruiter_Class_list from './Recruiter/Recruiter_class_list';
import Recruiter_Class_profile from './Recruiter/Recruiter_Class_profile';
import Recruiter_Dashboards from "./Recruiter/Recruiter_Dashboards";
import Navbar2 from "./Recruiter/Navbar_2"
import Job_Dashboards from "./Recruiter/Job_Dashboards"
import Axios from "../src/axios";
import Footer from "./User/Footer"
import action from "./Redux/Action";
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
          props.setuser(res.data.email);
        })
        .catch((err) => {
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
       <Route exact path="/">
         <Navbar/>
         <User_Home_page />
         <Footer/>

       </Route>

        <Route exact path="/User_Home_page">
         <Navbar/>
         <User_Home_page />
         <Footer/>
       </Route>
       <Route exact path="/class_list">
         <Navbar/>
         <Class_list/>
         <Footer/>
       </Route>
       <Route exact path="/Class_profile">
         <Navbar/>
         <Class_profile/>
         <Footer/>
       </Route>
       <Route exact path="/User_Dashboards">
         <Navbar/>
         <User_Dashboards/>
         <Footer/>
       </Route>
       <Route exact path="/Job">
         <Navbar/>
         <Job/>
         <Footer/>
       </Route>
       <Route exact path="/Create_job_profile">
         <Navbar/>
        <Create_job_profile/>
        <Footer/>
       </Route>
                {/* Recruiter */}
       <Route exact path="/Recruiter_Home_page">
          <Navbar2/>
         <Recruiter_Home_page/>
         <Footer/>
        
       </Route>
       <Route exact path="/Profile_create">
         <Navbar2/>
         <Profile_create/>
         <Footer/>
       </Route>
       <Route exact path="/Job_Profile_create">
         <Navbar2/>
         <Job_Profile_create/>
         <Footer/>
       </Route>
       <Route exact path="/Recruiter_Dashboards">
         <Navbar2/>
         <Recruiter_Dashboards/>
         <Footer/>
       </Route>
       <Route exact path="/Recruiter_class_list">
         <Navbar2/>
         <Recruiter_Class_list/>
         <Footer/>
       </Route>
       <Route exact path="/Recruiter_Class_profile">
         <Navbar2/>
         <Recruiter_Class_profile/>
         <Footer/>
       </Route>
       
       
       <Route exact path="/Job_Dashboards">
         <Navbar2/>
         <Job_Dashboards/>
         <Footer/>
       </Route>
     </Switch>
   </Router>
   
    </div>
  )
}
function mapstatetoprops(state) {
  console.log(state);
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