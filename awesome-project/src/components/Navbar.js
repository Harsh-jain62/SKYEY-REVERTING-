import React, { Component } from "react";
import { Nav, Navbar, Container, button } from "react-bootstrap";
import logo from "../components/image/logo.png";
import { MDBContainer } from "mdbreact";

export default class NavbarUser extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      popupVisible: false,
    };
  }

  handleClick() {
    if (!this.state.popupVisible) {
      // attach/remove event handler
      document.addEventListener("click", this.handleOutsideClick, false);
    } else {
      document.removeEventListener("click", this.handleOutsideClick, false);
    }

    this.setState((prevState) => ({
      popupVisible: !prevState.popupVisible,
    }));
  }

  handleOutsideClick(e) {
    // ignore clicks on the component itself
    if (this.node.contains(e.target)) {
      return;
    }

    this.handleClick();
  }

  render() {
    return (
      <div>
        <Navbar className="drakbg">
          <MDBContainer fluid>
            <Navbar.Brand href="#home">
              <img src={logo} />
              {/* <img src={require("./image/logo.png")} /> */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <div className="page-title-nav">{/* <h4>Dashboard</h4> */}</div>
              <Nav className="navbox">
                <Nav.Link onClick={this.handleClick}>
                  <div
                    className="popover-container"
                    ref={(node) => {
                      this.node = node;
                    }}
                  >
                    <i class="fa fa-user-circle"></i>&nbsp; John Doe &nbsp;
                    <i class="fas fa-caret-down"></i>
                    {this.state.popupVisible && (
                      <div className="notifaction-toggle">
                        <ul>
                          <li>
                            <a href="/">Logout</a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </MDBContainer>
        </Navbar>
      </div>
    );
  }
}
