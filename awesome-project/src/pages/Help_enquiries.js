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
export default function Help_enquiries() {
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
                    <MDBBox tag="h4">Reply</MDBBox>
                  </MDBBox>
                  <MDBRow>
                    <MDBCol md={2} className="text-left">
                      <div className="form-group">
                        <label>Posted By</label>
                      </div>
                    </MDBCol>
                    <MDBCol md={10}>
                      <div className="form-group">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="John Smith"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md={2} className="text-left">
                      <div className="form-group">
                        <label>Email</label>
                      </div>
                    </MDBCol>
                    <MDBCol md={10}>
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="user@gmail.com"
                        />
                      </div>
                    </MDBCol>
                    <MDBCol md={2} className="text-left">
                      <div className="form-group">
                        <label>Message</label>
                      </div>
                    </MDBCol>
                    <MDBCol md={10}>
                      <div className="form-group">
                        <textarea
                          type="text"
                          className="form-control"
                          placeholder="Type Message Here"
                        ></textarea>
                      </div>
                    </MDBCol>
                    <MDBCol lg={12} className="text-right">
                      <MDBBox className="form-group">
                        <MDBBtn
                          className="main-btn"
                          onClick={(e) => {
                            e.preventDefault();
                            window.location.href = "manage_enquiries";
                          }}
                        >
                          Back
                        </MDBBtn>
                      </MDBBox>
                      <div className="form-group">
                        <MDBBtn className="main-btn">Reply</MDBBtn>
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
