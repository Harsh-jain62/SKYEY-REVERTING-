import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {
  MDBContainer,
  MDBBox,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
  MDBCard,
} from "mdbreact";
export default function Change_password() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <MDBBox className="content-page">
        <MDBContainer>
          <MDBCard>
            <form>
              <MDBRow>
                <MDBCol md={12}>
                  <MDBBox className="form-title">
                    <MDBBox tag="h4">Change Password</MDBBox>
                  </MDBBox>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Old Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="New Password"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Confirm Password"
                    />
                  </div>
                </MDBCol>
                <MDBCol lg={12} className="text-right">
                  <div className="form-group">
                    <MDBBtn className="main-btn">ADD</MDBBtn>
                  </div>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCard>
        </MDBContainer>
      </MDBBox>
    </div>
  );
}
