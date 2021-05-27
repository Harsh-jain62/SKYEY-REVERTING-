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

export default function Manage_cms() {
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
        label: "Page Name",
        field: "page",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
        },
      },
      {
        label: "Short Description",
        field: "description",
        width: 700,
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
        page: "Page-1",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        action: (
          <MDBBox className="action-btn-div">
            <MDBBtn
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "edit_cms";
              }}
            >
              <MDBIcon icon="edit" />
            </MDBBtn>
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>
            {/* 
            <MDBBtn className="view-btn">
              <MDBIcon far icon="eye" />
            </MDBBtn> */}
          </MDBBox>
        ),
      },
      {
        check: <input label="Check 2" type="checkbox" id="checkbox2" />,
        page: "Page-2",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        action: (
          <MDBBox className="action-btn-div">
            <MDBBtn
              className="edit-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "edit_cms";
              }}
            >
              <MDBIcon icon="edit" />
            </MDBBtn>
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>
            {/* 
            <MDBBtn className="view-btn">
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
            <MDBBox tag="h4">Manage CMS</MDBBox>
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
