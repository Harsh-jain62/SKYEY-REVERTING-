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
export default function Add_job_title() {
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
                    <MDBBox tag="h4">Add Job Title</MDBBox>
                  </MDBBox>
                  {/* <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job title Listing"
                    />
                  </div> */}
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Job title Name"
                    />
                  </div>
                </MDBCol>
                <MDBCol lg={12} className="text-right bottom-btn">
                  <MDBBox className="form-group">
                    <MDBBtn
                      className="main-btn"
                      onClick={(e) => {
                        e.preventDefault();
                        window.location.href = "manage_job";
                      }}
                    >
                      Back
                    </MDBBtn>
                  </MDBBox>
                  <MDBBox className="form-group">
                    <MDBBtn className="main-btn">Save</MDBBtn>
                  </MDBBox>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCard>
        </MDBContainer>
      </MDBBox>
    </div>
  );
}
