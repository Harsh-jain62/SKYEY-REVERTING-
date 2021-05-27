import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBBox,
  MDBCard,
} from "mdbreact";
import { NavLink } from "react-router-dom";
import logo from "../components/image/logo.png";

const FormPage = () => {
  return (
    <MDBBox className="login-form-div">
      {" "}
      <MDBContainer>
        <MDBRow className="login-form-section">
          <MDBCol md="5">
            <MDBCard>
              <MDBBox>
                {/* <img src={require("../components/image/logo.png")} /> */}
                <img src={logo} />
              </MDBBox>
              <form>
                <MDBBox tag="h3">Admin Login</MDBBox>
                <MDBBox class="form-group">
                  <input
                    type="email"
                    id="defaultFormLoginEmailEx"
                    className="form-control"
                    placeholder="Email"
                  />
                </MDBBox>
                <MDBBox class="form-group">
                  <input
                    type="password"
                    id="defaultFormLoginPasswordEx"
                    className="form-control"
                    placeholder="Password"
                  />
                </MDBBox>
                <MDBBox className="forgot-pass-div">
                  <NavLink to="#">Forgot Password?</NavLink>
                </MDBBox>
                <div className="text-center mt-3">
                  <MDBBtn
                    color="indigo"
                    type="Submit"
                    className="login-btn btn-block"
                    onClick={(e) => {
                      e.preventDefault();
                      window.location.href = "dashboard";
                    }}
                  >
                    Login
                  </MDBBtn>
                </div>
              </form>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </MDBBox>
  );
};

export default FormPage;
