import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { MDBIcon } from "mdbreact";
import { Dropdown } from "react-bootstrap";
export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div class="left-side-menu">
          <div id="sidebar-menu" class="shadow1 mm-active">
            <ul class="metismenu mm-show" id="side-menu">
              <li class="mm-active">
                {/* <a href="dashboard.php" class="active"> */}
                <NavLink to="/dashboard" activeClassName="active-link">
                  <MDBIcon icon="tachometer-alt" />

                  <span> Dashboard </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_member" activeClassName="active-link">
                  <i class="fas fa-th"></i>

                  <span> Manage Member</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_cms" activeClassName="active-link">
                  <i class="fas fa-search"></i>
                  <span>Manage CMS Pages</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_topic" activeClassName="active-link">
                  <i class="fas fa-flag"></i>
                  <span>Manage topic (#hastag)</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_group" activeClassName="active-link">
                  <MDBIcon icon="user-friends" />
                  <span>Manage groups</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_job" activeClassName="active-link">
                  <MDBIcon far icon="id-card" />
                  <span>Manage Job Title</span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/manage_industry" activeClassName="active-link">
                  <MDBIcon far icon="chart-bar" />
                  <span>Manage Industry </span>
                </NavLink>
              </li>
              <li>
                <Dropdown className="menu-dropdown">
                  <Dropdown.Toggle id="dropdown-basic">
                    <MDBIcon icon="cog" />
                    <span>Manage Setting</span>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <NavLink
                      to="/change_password"
                      activeClassName="active-link"
                    >
                      Change Password
                    </NavLink>
                    <NavLink
                      to="/manage_enquiries"
                      activeClassName="active-link"
                    >
                      Manage Help Enquiries
                    </NavLink>
                    <NavLink to="/email_setting" activeClassName="active-link">
                      Email Setting
                    </NavLink>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
