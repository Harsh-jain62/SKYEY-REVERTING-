import React, { Component, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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

export default function Manage_topic() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [show1, setShow1] = useState(false);

  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => setShow1(true);

  const [datatable, setDatatable] = React.useState({
    columns: [
      {
        label: <input type="checkbox" />,
        field: "check",
        width: 270,
        sort: "disabled",
      },
      {
        label: "Topics",
        field: "topic",
        width: 150,
        attributes: {
          "aria-controls": "DataTable",
          "aria-label": "Name",
          sort: "disabled",
        },
      },
      {
        label: "Members",
        field: "member",
        width: 270,
      },
      {
        label: "First Post",
        field: "post",
        width: 200,
      },
      {
        label: "Total Message",
        field: "messsage",
        sort: "asc",
        width: 100,
      },
      {
        label: "Organitor of Topic",
        field: "organitor",
        sort: "disabled",
        width: 150,
      },
      {
        label: "Created On  ",
        field: "date",
        sort: "disabled",
        width: 100,
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
        topic: "#hashtag",
        member: "05",
        post: (
          <NavLink to="#" className="show-post-cont" onClick={handleShow1}>
            First post...
          </NavLink>
        ),
        messsage: "422",
        organitor: "xyz  ",
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
          <MDBBox className="action-btn-div">
            <MDBBtn className="delete-btn" onClick={handleShow}>
              <MDBIcon far icon="trash-alt" />
            </MDBBtn>
          </MDBBox>
        ),
      },
      {
        check: <input label="Check 2" type="checkbox" id="checkbox2" />,
        topic: "#hashtag",
        member: "05",
        post: (
          <NavLink to="#" className="show-post-cont" onClick={handleShow1}>
            First post...
          </NavLink>
        ),
        messsage: "422",
        organitor: "xyz  ",
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
            <MDBBox tag="h4">Manage Topic (#hashtag)</MDBBox>
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
      <Modal show={show1} onHide={handleClose1}>
        <Modal.Header closeButton>
          <Modal.Title>Post Content</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <MDBBox>
            <MDBBox tag="p">This is the content of the post</MDBBox>
          </MDBBox>
          <MDBRow>
            <MDBCol className="text-right mt-20">
              {/* <Button className="main-btn" onClick={handleClose1}>
                Yes
              </Button> */}
              <Button className="main-btn" onClick={handleClose1}>
                Close
              </Button>
            </MDBCol>
          </MDBRow>
        </Modal.Body>
      </Modal>
    </div>
  );
}
