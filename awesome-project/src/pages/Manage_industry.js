// import React, { Component, useEffect, useState } from "react";
// import {
//   MDBCard,
//   MDBDataTableV5,
//   MDBBtn,
//   MDBBox,
//   MDBIcon,
//   MDBRow,
//   MDBCol,
// } from "mdbreact";

// import { Modal, Button } from "react-bootstrap";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

// export default function Manage_industry() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [datatable, setDatatable] = React.useState({
//     columns: [
//       {
//         label: <input type="checkbox" />,
//         field: "check",
//         width: 270,
//         sort: "disabled",
//       },
//       {
//         label: "Industry Listing",
//         field: "listing",
//         width: 150,
//         attributes: {
//           "aria-controls": "DataTable",
//           "aria-label": "Name",
//           sort: "disabled",
//         },
//       },
//       {
//         label: "Industry Name",
//         field: "title",
//         width: 270,
//       },
//       {
//         label: "Status",
//         field: "status",
//         sort: "disabled",
//         width: 100,
//       },
//       {
//         label: "Action",
//         field: "action",
//         sort: "disabled",
//         width: 100,
//       },
//     ],
//     rows: [
//       {
//         check: <input label="Check 2" type="checkbox" id="checkbox2" />,
//         listing: "Listing Name",
//         title: "John_Smith",

//         status: (
//           <div className="custom-control custom-switch">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customSwitches"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="customSwitches"
//             ></label>
//           </div>
//         ),
//         action: (
//           <MDBBox className="action-btn-div">
//             <MDBBtn
//               className="edit-btn"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.location.href = "edit_industry";
//               }}
//             >
//               <MDBIcon icon="edit" />
//             </MDBBtn>
//             <MDBBtn className="delete-btn" onClick={handleShow}>
//               <MDBIcon far icon="trash-alt" />
//             </MDBBtn>
//           </MDBBox>
//         ),
//       },
//       {
//         check: <input label="Check 2" type="checkbox" id="checkbox2" />,
//         listing: "Listing Name",
//         title: "John_Smith",

//         status: (
//           <div className="custom-control custom-switch">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customSwitches"
//             />
//             <label
//               className="custom-control-label"
//               htmlFor="customSwitches"
//             ></label>
//           </div>
//         ),
//         action: (
//           <MDBBox className="action-btn-div">
//             <MDBBtn
//               className="edit-btn"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.location.href = "edit_industry";
//               }}
//             >
//               <MDBIcon icon="edit" />
//             </MDBBtn>
//             <MDBBtn className="delete-btn" onClick={handleShow}>
//               <MDBIcon far icon="trash-alt" />
//             </MDBBtn>
//           </MDBBox>
//         ),
//       },
//     ],
//   });

//   return (
//     <div>
//       <Navbar />
//       <Sidebar />
//       <MDBBox className="content-page">
//         <MDBCard>
//           <MDBBox className="page-title">
//             <MDBBox tag="h4">Manage Industry</MDBBox>
//             <MDBBtn
//               className="main-btn"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.location.href = "add_industry";
//               }}
//             >
//               Add
//             </MDBBtn>
//           </MDBBox>
//           <form>
//             <MDBBox className="text-right date-filters">
//               <MDBBox className="">
//                 <input type="date" placeholder="From Date" />
//               </MDBBox>
//               &nbsp;&nbsp;
//               <MDBBox className="">
//                 <input type="date" placeholder="To Date" />
//               </MDBBox>
//             </MDBBox>
//           </form>

//           <MDBDataTableV5
//             hover
//             entriesOptions={[5, 20, 25]}
//             entries={5}
//             pagesAmount={4}
//             data={datatable}
//             searchTop
//             searchBottom={false}
//           />
//           <MDBBox className=" selected-filter-div">
//             <div className="form-group">
//               <select className="form-control">
//                 <option value="1">Delete All</option>
//                 <option value="2">Select All</option>
//                 <option value="3">Deactivate</option>
//                 <option value="4">Activate</option>
//               </select>
//             </div>
//           </MDBBox>
//         </MDBCard>
//       </MDBBox>
//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           Are you sure you want to Delete?
//           <MDBRow>
//             <MDBCol className="text-right mt-20">
//               <Button className="main-btn" onClick={handleClose}>
//                 Yes
//               </Button>
//               <Button className="main-btn" onClick={handleClose}>
//                 Cancel
//               </Button>
//             </MDBCol>
//           </MDBRow>
//         </Modal.Body>
//       </Modal>
//     </div>
//   );
// }
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

export default function Manage_industry() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [getList,setList]=useState( [
    {
      check: <input label="Check 2" type="checkbox" id="checkbox2" />,
      listing: "Listing Name",
      title: "John_Smith",

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
          <MDBBtn
            className="edit-btn"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "Edit_industry";
            }}
          >
            <MDBIcon icon="edit" />
          </MDBBtn>
          <MDBBtn className="delete-btn" onClick={handleShow}>
            <MDBIcon far icon="trash-alt" />
          </MDBBtn>
        </MDBBox>
      ),
    },
    {
      check: <input label="Check 2" type="checkbox" id="checkbox2" />,
      listing: "Listing Name",
      title: "John_Smith",

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
              window.location.href = "Edit_industry";
            }}
          >
            <MDBIcon icon="edit" />
          </MDBBtn>
          <MDBBtn className="delete-btn" onClick={handleShow}>
            <MDBIcon far icon="trash-alt" />
          </MDBBtn>
        </MDBBox>
      ),
    },
  ])
  useEffect(function(){
    fetchindustry()
   
},[])
const handleDelete=async(oldData)=>{
  console.log(oldData)
     
  var body=oldData
  var result=await postData('industry/deleteone/'+body)
 console.log(result)
 fetchindustry()

}
const handleDeleteall=async(oldData)=>{
  console.log(oldData)
  var body=oldData
  var result=await postData('industry/deleteall')
 console.log(result)
 fetchindustry()

}


  const fetchindustry=async()=>{
    var list=await getData('industry/get-new-users')
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
              window.location.href = "edit_job";
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
            <MDBBox tag="h4">Manage Industry</MDBBox>
            <MDBBtn
              className="main-btn"
              onClick={(e) => {
                e.preventDefault();
                window.location.href = "add_industry";
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
                  label: "Industry Listing",
                  field: "listing",
                  width: 250,
                  attributes: {
                    "aria-controls": "DataTable",
                    "aria-label": "Name",
                    sort: "disabled",
                  },
                },
                {
                  label: "Industry Name",
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
                <option value="1" >Delete All</option>
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

