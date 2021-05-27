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
export default function Add_industry() {
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
                    <MDBBox tag="h4">Add Industry</MDBBox>
                  </MDBBox>
                  {/* <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Industry Listing"
                    />
                  </div> */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Industry Name"
                    />
                  </div>
                </MDBCol>
                <MDBCol lg={12} className="text-right bottom-btn">
                  <MDBBox className="form-group">
                    <MDBBtn
                      className="main-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "manage_industry";
                      }}
                    >
                      Back
                    </MDBBtn>
                  </MDBBox>
                  <div className="form-group">
                    <MDBBtn className="main-btn">Save</MDBBtn>
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
