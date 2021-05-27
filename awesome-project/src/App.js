import React, { Component } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

import logo from "./logo.svg";
import "./App.css";
import "./Style.css";
// import LoginRegister from "./component/LoginRegister";
// import Footer from "./component/Footer";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import Investment from "./pages/Investment";
// import Career from "./pages/Career";
// import DataProtection from "./pages/DataProtection";

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Manage_member from "./pages/Manage_member";
import Edit_member from "./pages/Edit_member";
import Edit_cms from "./pages/Edit_cms";
import Login from "./pages/Login";
import Add_job_title from "./pages/Add_job_title";
import Add_industry from "./pages/Add_industry";

import Edit_job from "./pages/Edit_job";
import Edit_industry from "./pages/Edit_industry";
import Email_setting from "./pages/Email_setting";
import Help_enquiries from "./pages/Help_enquiries";
import Change_password from "./pages/Change_password";
import Manage_cms from "./pages/Manage_cms";
import Manage_topic from "./pages/Manage_topic";
import Manage_group from "./pages/Manage_group";
import Manage_job from "./pages/Manage_job";
import Manage_industry from "./pages/Manage_industry";
import Manage_enquiries from "./pages/Manage_enquiries";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/manage_member" exact component={Manage_member} />
            <Route path="/edit_member" exact component={Edit_member} />
            <Route path="/edit_cms" exact component={Edit_cms} />
            <Route path="/add_job_title" exact component={Add_job_title} />
            <Route path="/add_industry" exact component={Add_industry} />

            <Route path="/edit_job" exact component={Edit_job} />
            <Route path="/edit_industry" exact component={Edit_industry} />
            <Route path="/email_setting" exact component={Email_setting} />
            <Route path="/help_enquiries" exact component={Help_enquiries} />
            <Route path="/change_password" exact component={Change_password} />
            <Route path="/manage_cms" exact component={Manage_cms} />
            <Route path="/manage_topic" exact component={Manage_topic} />
            <Route path="/manage_group" exact component={Manage_group} />
            <Route path="/manage_job" exact component={Manage_job} />
            <Route path="/manage_industry" exact component={Manage_industry} />
            <Route
              path="/manage_enquiries"
              exact
              component={Manage_enquiries}
            />
          </Switch>
        </BrowserRouter>
        {/*   
    <TeamModal/> */}
      </div>
    );
  }
}

export default App;
