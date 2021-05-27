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
export default function Edit_member() {
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
                    <MDBBox tag="h4">Edit Members</MDBBox>
                  </MDBBox>
                  <MDBRow>
                    <MDBCol md={6}>
                      <div className="form-group">
                        <select className="form-control">
                          <option>Industry</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol md={6}>
                      <div className="form-group">
                        <select className="form-control">
                          <option>Job Title</option>
                          <option value="1">Option 1</option>
                          <option value="2">Option 2</option>
                          <option value="3">Option 3</option>
                        </select>
                      </div>
                    </MDBCol>
                    <MDBCol lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Company Name"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Full Name"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Company Mobile"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol lg={6}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Email"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol lg={6}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          id="formGroupExampleInput"
                          placeholder="Phone Number"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol lg={12} className="text-right bottom-btn">
                      <MDBBox className="form-group">
                        <MDBBtn
                          className="main-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "manage_member";
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
                </MDBCol>
              </MDBRow>
            </form>
          </MDBCard>
        </MDBContainer>
      </MDBBox>
    </div>
  );
}
