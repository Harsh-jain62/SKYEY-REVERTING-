import React, { Component, useEffect, useState } from "react";
import {ServerURL,getData,postData,postDataAndImage} from './FetchNodeServices';

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

export default function Manage_job(props) {
 
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [getList,setList]=useState()
  
  useEffect(function(){
    fetchJob()
   
},[])
const handleDelete=async(oldData)=>{
  console.log(oldData)
     
  var body=oldData
  var result=await postData('job/deleteone/'+body)
 console.log(result)
 fetchJob()

}
const handleDeleteall=async(oldData)=>{
  console.log(oldData)

  var body=oldData
  var result=await postData('job/deleteall')
   console.log(result)
    fetchJob()

}
 const fetchJob=async()=>{
    var list=await getData('job/get-new-users')
    console.log("list",list)
    // setList(list.data)
    var blankArray=[]
     list.data.map(item=> {
     console.log("item",item)
     blankArray.push( {
      check: <input label="Check 2" type="checkbox" id="checkbox2" />,
      listing: item.name,
      title:item.name,
      status: (
        
        <div className="custom-control custom-switch">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customSwitches"
        checked={item.isActive ? "true"  : null}
          />
          <label
            className="custom-control-label"
            htmlFor="customSwitches"
          ></label>
        </div>
      ),
      action: (
        <MDBBox className="action-btn-div">
          <MDBBtn
            className="edit-btn"
            onClick={(e) => {
              e.preventDefault();
              props.history.push({
                pathname: '/edit_job',
                data: item  // your data array of objects
              })
            }}
          >
            <MDBIcon icon="edit" />
          </MDBBtn>
          <MDBBtn className="delete-btn" onClick={()=>handleDelete(
            item._id)}>
            <MDBIcon far icon="trash-alt" />
          </MDBBtn>
        </MDBBox>
      ),
    })
   
     })
     setList(blankArray)
   
    }
  const [datatable, setDatatable] = React.useState({});

  return (
    <div>
      <Navbar />
      <Sidebar />
      <MDBBox className="content-page">
        <MDBCard>
          <MDBBox className="page-title">
            <MDBBox tag="h4">Manage Job Title</MDBBox>
            <MDBBtn
              className="main-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "add_job_title";
              }}
            >
              Add
            </MDBBtn>
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
            data={{
              columns: [
                {
                  label: <input type="checkbox" />,
                  field: "check",
                  width: 270,
                  sort: "disabled",
                },
                {
                  label: "Job title Listing",
                  field: "listing",
                  width: 250,
                  attributes: {
                    "aria-controls": "DataTable",
                    "aria-label": "Name",
                    sort: "disabled",
                  },
                },
                {
                  label: "Job Title Name",
                  field: "title",
                  width: 370,
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
              rows:getList
            }}
            searchTop
            searchBottom={false}
          />
          <MDBBox className=" selected-filter-div">
            <div className="form-group">
            <select className="form-control" onChange={(e)=> handleDeleteall(e.target.value) } >
                <option>---</option>
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
