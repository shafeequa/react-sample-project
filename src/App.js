import './App.css';
import React, {useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import { Grid, TableBody, TableHead, TableCell , TableContainer, TableRow, Typography, Alert,ToolTip} from '@mui/material';
import axios from 'axios';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ReadOnlyRow from './components/ReadOnlyRow';
import EditUser from './components/EditUser';
import Paper from '@mui/material/Paper';
import styled from 'styled-components';
import { Dialog, DialogTitle, DialogContent ,DialogActions} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const UserWrapper = styled.div`
    .materialTableStyle {
        table {
            border-collapse: separate;
            border-spacing: 0 1em;
            width: 99%;
            margin: auto;
        }
        th:first-child, td:first-child {
            border-top-left-radius: 15px;
            border-bottom-left-radius: 15px;
        }
        th:last-child, td:last-child {
            border-top-right-radius: 15px;
            border-bottom-right-radius: 15px;
        }
        th {
            font-size: 15px !important;
            white-space: nowrap;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: #fff;
            border: none;
            color: #F59300;
            height: 55px;
        }
        .MuiTableSortLabel-active {
            color: #F59300;
        }
        .MuiTableSortLabel-root:hover {
            color: #F59300;
        }
        .MuiTableSortLabel-icon {
            color: #F59300 !important;
        }
        .closeIcon { 
          position: absolute;
          left: 450px;
          right: 0px;
          top: 20px;
          bottom: 0px;
      }
        td {
            position: relative;
            font-size: 15px !important;
            color: #000;
            padding-left: 8px;
            padding-right: 8px;
            padding-top: 10px;
            padding-bottom: 10px;
            background-color: #fff;
            border: none;
            height: 60px;
        }
        tbody {
            tr {
                position: relative;
                border-radius: 15px;
                transition: all 0.3s linear;
              
                &:hover {
                    box-shadow: 0 10px 6px rgba(0,0,0,0.10), 0 6px 3px rgba(0,0,0,0.10);

                    .actionListDeleteIconPosition {
                        display: block;
                    }
                    .actionListEditIconPosition {
                        display: block;
                    }
                }
            }
        }
        .actionListDeleteIconPosition {
            position: absolute;
            top: -16px;
            right: 15px;
            display: none;
            transition: all 0.3s linear;
        }
        .actionListEditIconPosition {
            position: absolute;
            top: -16px;
            right: 56px;
            display: none;
            transition: all 0.3s linear;
        }
        .actionBtn {
            padding: 8px;
            background-color: #ffffff;
            box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);

            &:hover {
                background-color: rgba(245,147,0,0.1);
                color: #F59300;
            }
        }
        .actionIcon {
            font-size: 17px;
        }

    .message {
      width : 50%;
      height : 10px;
    }

    

`;


function App() {
  var [rows,setRows] = React.useState([]);
  const [message,setMessage] = React.useState("");
  var [popup,setPopup] = React.useState(false);
  const [userDetails,setUserDetails] = React.useState([]);
  const [editUserId, setEditUserId] = React.useState();
  const [editFormData, setEditFormData] = React.useState({
    id: "",
    firstname : "",
    lastname : "",
    address : "",
    emailId : "",
    mobileNumber: "",
    role: ""
  });

  useEffect (() => {
     
      const getUrl = "https://localhost:44304/api/Users";
      axios.get(getUrl).then((res)=>{
        rows = res.data
        setRows(rows)
        console.log(rows)
      })
},[])

const handleDeleteUser = (id) => {
      const deleteUrl = "https://localhost:44304/api/Users/"+ id;
      axios.delete(deleteUrl).then((res)=>{
      console.log(res)
      setMessage(
        <div className="message">
          <div className="alert alert-success" role="alert">
            "User deleted successfully!"
          </div>
      </div>)     
      setTimeout(() =>{setMessage("")},5000)
      window.location.href = "/"
  })
}

const handleEditUser = (row,id) => {
  setEditUserId(id)
  const formValues = {
    id: row.id,
    firstname : row.firstname,
    lastname : row.lastname,
    address : row.address,
    emailId : row.emailId,
    mobileNumber: row.mobileNumber,
    role: row.role

  };
  setEditFormData(formValues);
  
}

const handleEditFormChange = (event) => {
  event.preventDefault();
  setEditFormData({...editFormData, [event.target.name]: event.target.value})

}

const submitFormChange = (id) => {
  const editUserUrl = "https://localhost:44304/api/Users/"+ id;
  console.log(editFormData)
     axios.put(editUserUrl,editFormData).then((res)=>{
      console.log(res)
      console.log(editFormData)
      setMessage(
        <div className="message">
          <div className="alert alert-success" role="alert">
            "User updated successfully!"
          </div>
      </div>)     
      setTimeout(() =>{setMessage("")},5000)
      window.location.href = "/"
  })  
}

const viewUserDetail = () => {

  if(userDetails != undefined){
  return(
    <div>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>First Name </Grid>
      <Grid item xs={12} sm={6} md={6}>: {userDetails.firstname} </Grid>
    </Grid> 
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>Last Name </Grid>
      <Grid item xs={12} sm={6} md={6}>: {userDetails.lastname} </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>Address </Grid>
      <Grid item xs={12} sm={6} md={6}>: {userDetails.address} </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>Email </Grid>
      <Grid item xs={12} sm={6} md={6}>: {userDetails.emailId} </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>Phone </Grid>
      <Grid item xs={12} sm={6} md={6}>: {userDetails.mobileNumber} </Grid>
    </Grid>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={4}>Role </Grid>
      <Grid item xs={12} sm={6} md={6}>: {userDetails.role} </Grid>
    </Grid> 
     </div>
  )}
  
}

const handleViewUser = (id,row) => {
    setPopup(true)
    const getUserUrl = "https://localhost:44304/api/Users/"+ id;
      axios.get(getUserUrl).then((res)=>{
      console.log(res)
      setUserDetails(res.data)
      })
}

  return (
    <UserWrapper>
       <div className={`materialTableStyle`}>
    <TableContainer className=" container mt-5" component={Paper}>
      <span style={{display: "flex", justifyContent:'center'}}>
      <Typography className='mt-2' variant='h6'>List of Users</Typography>
      </span>
      <div>{message}</div>
      <span style={{display: "flex", justifyContent:'flex-end'}}>
      <Button  variant = "contained" className="mt-2 mx-3 noShadow addBtn" onClick={() => window.location.href = "/add/user"}> Add User</Button>
      </span>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell>First Name</TableCell>
          <TableCell align="right">Last Name</TableCell>
          <TableCell align="right">Address</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">Phone</TableCell>
          <TableCell align="right">Role</TableCell>
          <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        { rows.map(r =>{
         return(
        <TableBody>
          {editUserId == r.id?(<EditUser row={r} editFormData = {editFormData} handleEditFormChange={handleEditFormChange} submitFormChange={submitFormChange}/>) :
          (<ReadOnlyRow 
          row = {r}
          handleViewUser = {handleViewUser}
          handleEditUser = {handleEditUser} 
          handleDeleteUser = {handleDeleteUser}
          />)}
           <Dialog open={popup} closeonescape="true"  fullWidth={true} maxWidth="sm" >
          <DialogTitle>
            <Typography variant="h6">User Detail</Typography>
            <div style={{display: "flex", justifyContent:'flex-end'}}>
                <CloseIcon className ="closeIcon" onClick = {()=> setPopup(false)}/>
            </div>
          </DialogTitle> 
          <DialogContent>
            {viewUserDetail()}
              
          </DialogContent>
          </Dialog> 
        </TableBody>
         )}
         )}
      </Table>
     
      </TableContainer>
      </div>
      </UserWrapper>
  );
}

export default App;
