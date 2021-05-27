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

export default function Manage_enquiries() {
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
        label: "Posted By",
        field: "post",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
          sort: "disabled",
        },
      },
      {
        label: "Email",
        field: "mail",
        width: 270,
      },
      {
        label: "Date",
        field: "date",
        width: 200,
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
        post: "Listing Name",
        mail: "John_Smith",
        date: "12.01.2021",
        status: (
          <MDBBtn
            className="reply-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "help_enquiries";
            }}
          >
            Reply
          </MDBBtn>
        ),
        action: (
          <MDBBox className="action-btn-div">
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>
          </MDBBox>
        ),
      },
      {
        check: <input label="Check 2" type="checkbox" id="checkbox2" />,
        post: "Listing Name",
        mail: "John_Smith",
        date: "12.01.2021",
        status: <MDBBtn className="replied-btn">Replied</MDBBtn>,
        action: (
          <MDBBox className="action-btn-div">
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>
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
            <MDBBox tag="h4">Manage Help Enquiries</MDBBox>
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
