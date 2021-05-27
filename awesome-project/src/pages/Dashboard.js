import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import {ServerURL,getData,postData,postDataAndImage} from './FetchNodeServices';
import React,{useState,useEffect,Component}  from 'react';
import {
  MDBContainer,
  MDBBox,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableBody,
  MDBTableHead,
} from "mdbreact";
import { List } from "@material-ui/core";
export default function Dashboard(props) {
const [getList,setList]=useState([])
const [getCount,setCount]=useState([])

  useEffect(function(){
    fetchAdmin()
    // fetchCount()
},[])

  const fetchAdmin=async()=>{
    var list=await getData('admin/get-new-users')
    console.log("raj",list.data.length)
   
     setCount(list.data.length)
     setList(list.data)
    }
    // const fetchCount=async()=>{
    //   var count=await getData('admin/countobject')
    //   //console.log("list",list)
    //   setCount(count.data)
    //   }
    return (
      <div>
          <Navbar />
          <Sidebar />
          <MDBBox className="content-page">
            <MDBContainer>
              <MDBBox className="page-title">
                <MDBBox tag="h4">Dashboard</MDBBox>
              </MDBBox>
              <MDBRow>
                <MDBCol lg="4">
                  <MDBBox className="count-div">
                    <MDBBox className="count-icon-div bg-orange">
                      <MDBIcon icon="user-circle" />
                    </MDBBox>
                    <MDBBox>
                      <MDBBox tag="p">{getCount}</MDBBox>
                      <MDBBox tag="p" className="count-cont">
                        <br></br>Members
                      </MDBBox>
                    </MDBBox>
                  </MDBBox>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBBox className="count-div">
                    <MDBBox className="count-icon-div bg-blue">
                      <MDBIcon icon="hashtag" />
                    </MDBBox>
                    <MDBBox>
                      <MDBBox tag="p">84</MDBBox>
                      <MDBBox tag="p" className="count-cont">
                        Topics<br></br>(#hashtags)
                      </MDBBox>
                    </MDBBox>
                  </MDBBox>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBBox className="count-div">
                    <MDBBox className="count-icon-div bg-light-green">
                      <MDBIcon icon="user-friends" />
                    </MDBBox>
                    <MDBBox>
                      <MDBBox tag="p">84</MDBBox>
                      <MDBBox tag="p" className="count-cont">
                        <br></br>Groups
                      </MDBBox>
                    </MDBBox>
                  </MDBBox>
                </MDBCol>
                <MDBCol lg="12">
                  <MDBBox className="table-card-div">
                    <MDBBox className="table-title">
                      <MDBBox tag="h4">New Members</MDBBox>
                    </MDBBox>
                    <MDBTable responsive className="mt-20">
                      <MDBTableHead>
                        <tr>
                          {/* <th>
                            <input type="checkbox" id="defaultUnchecked" />
                          </th> */}
                          <th>Full Name</th>
                          <th>Comapany Name</th>
                          <th>Email</th>
                          <th>Phone Number</th>
                          <th>Date</th>
                        </tr>
                      </MDBTableHead>
                      <MDBTableBody>
                        {
                          getList.map(item=>{
                            return(
                              <tr>
                          {/* <td>
                            <input type="checkbox" id="defaultUnchecked" />
                          </td> */}
                          <td>{item.name}</td>
                          <td>{item.companyName}</td>
                          <td>{item.email}</td>
                          <td>
                            <MDBBox className="phone-num-col">
                              <MDBBox tag="p">{item.mobilenumber}</MDBBox>
                            <MDBBox tag="span">{item.isActive?"Verified":"Unverified"}</MDBBox>
                            </MDBBox>
                          </td>
                          <td>{item.createdAt.slice(0,10)}</td>
                        </tr>
                            )
                          })
                        }
                        
                      </MDBTableBody>
                    </MDBTable>
                  </MDBBox>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBBox>
        </div>
      );
  }