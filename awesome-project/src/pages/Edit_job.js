import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {ServerURL,getData,postData,postDataAndImage} from './FetchNodeServices';
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
export default function Edit_job(props) {
  const [name, setName]= React.useState(props.location.data.name)
  const handleUpdate=async(oldData)=>{
    console.log(oldData)
       
    var body=oldData
    // var result=await postData('job/update/'+body)
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"name":name});

var requestOptions = {
  method: 'PUT',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://192.168.0.140:3002/Job/update/"+oldData, requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
  }
  

  console.log("props data",props.location.data, props.location.data._id,props.location.data.name)
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
                    <MDBBox tag="h4">Edit Job Title</MDBBox>
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
                      value={name}
                      onChange={(e)=> setName(e.target.value)}
                  
                   
                    
                    />
                  </div>
                </MDBCol>
                <MDBCol lg={12} className="text-right bottom-btn">
                  <MDBBox className="form-group">
                    <MDBBtn
                      className="main-btn"
                     
                    >
                      Back
                    </MDBBtn>
                  </MDBBox>
                  <MDBBox className="form-group">
                    <MDBBtn className="main-btn"  onClick={()=>handleUpdate(
                        props.location.data._id)} >Update</MDBBtn>
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
