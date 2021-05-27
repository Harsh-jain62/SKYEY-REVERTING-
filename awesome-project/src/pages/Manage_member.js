import React, { Component, useEffect, useState } from "react";
import {
  MDBCard,
  MDBDataTableV5,
  MDBBtn,
  MDBBox,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdbreact";

import { Modal, Button } from "react-bootstrap";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

export default function Manage_member() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: <input type="checkbox" />,
        field: "check",
        width: 270,
        sort: "disabled",
      },
      {
        label: "Full Name",
        field: "name",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
          sort: "disabled",
        },
      },
      {
        label: "Company Name",
        field: "company",
        width: 270,
      },
      {
        label: "Email",
        field: "mail",
        width: 200,
      },
      {
        label: "Phone Number",
        field: "phone",
        sort: "asc",
        width: 100,
      },
      {
        label: "Registration Date",
        field: "date",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Status",
        field: "status",
        sort: "disabled",
        width: 100,
      },

      {
        label: "Action",
        field: "action",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        check: <input label="Check 2" type="checkbox" id="checkbox2" />,
        name: "Tiger Nixon",
        company: "Architect",
        mail: "user@gmail.com",
        phone: (
          <MDBBox className="phone-num-col">
            <MDBBox tag="p">+91 xxxxxxxxxx</MDBBox>
            <MDBBox tag="span">Verified</MDBBox>
          </MDBBox>
        ),
        date: "2011/04/25",
        status: (
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitches"
            />
            <label
              className="custom-control-label"
              htmlFor="customSwitches"
            ></label>
          </div>
        ),
        action: (
          <MDBBox className="action-btn-div wid-set">
            <MDBBtn
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "edit_member";
              }}
            >
              <MDBIcon icon="edit" />
            </MDBBtn>
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>

            {/* <MDBBtn className="view-btn">
              <MDBIcon far icon="eye" />
            </MDBBtn> */}
          </MDBBox>
        ),
      },
      {
        check: <input label="Check 2" type="checkbox" id="checkbox2" />,
        name: "Garrett Winters",
        company: "Accountant",
        mail: "user@gmail.com",
        phone: (
          <MDBBox className="phone-num-col">
            <MDBBox tag="p">+91 xxxxxxxxxx</MDBBox>
            <MDBBox tag="span">Verified</MDBBox>
          </MDBBox>
        ),
        date: "2011/07/25",
        status: (
          <div className="custom-control custom-switch">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitches2"
            />
            <label
              className="custom-control-label"
              htmlFor="customSwitches2"
            ></label>
          </div>
        ),
        action: (
          <MDBBox className="action-btn-div">
            <MDBBtn
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "edit_member";
              }}
            >
              <MDBIcon icon="edit" />
            </MDBBtn>
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>

            {/* <MDBBtn className="view-btn">
              <MDBIcon far icon="eye" />
            </MDBBtn> */}
          </MDBBox>
        ),
      },
    ],
  });

  return (
    <div>
      <Navbar />
      <Sidebar />
      <MDBBox className="content-page">
        <MDBCard>
          <MDBBox className="page-title">
            <MDBBox tag="h4">Manage Member</MDBBox>
          </MDBBox>
          <form>
            <MDBBox className="text-right date-filters">
              <MDBBox className="">
                <input type="date" placeholder="From Date" />
              </MDBBox>
              &nbsp;&nbsp;
              <MDBBox className="">
                <input type="date" placeholder="To Date" />
              </MDBBox>
            </MDBBox>
          </form>

          <MDBDataTableV5
            hover
            entriesOptions={[5, 20, 25]}
            entries={5}
            pagesAmount={4}
            data={datatable}
            searchTop
            searchBottom={false}
          />
          <MDBBox className=" selected-filter-div">
            <div className="form-group">
              <select className="form-control">
                <option value="1">Delete All</option>
                <option value="2">Select All</option>
                <option value="3">Deactivate</option>
                <option value="4">Activate</option>
              </select>
            </div>
          </MDBBox>
        </MDBCard>
      </MDBBox>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to Delete?
          <MDBRow>
            <MDBCol className="text-right mt-20">
              <Button className="main-btn" onClick={handleClose}>
                Yes
              </Button>
              <Button className="main-btn" onClick={handleClose}>
                Cancel
              </Button>
            </MDBCol>
          </MDBRow>
        </Modal.Body>
      </Modal>
    </div>
  );
}
