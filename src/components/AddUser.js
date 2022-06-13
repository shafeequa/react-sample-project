import React, {useState,useEffect} from 'react';
import axios from 'axios';
import { Button,  Grid, Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';


const AddUserWrapper = styled.div`
position: relative;

.wrapperWhite {
    background-color: #ffffff;
    padding: 1.5rem;
    border-radius: 18px;
    width: 100%;
}

.MuiRadio-colorSecondary.Mui-checked {
    color: #F59300;
}

.rangeFrequency {
    .MuiTextField-root {
        width: auto;
    }
}
.message {
    height : 50%;
}
`;

export default function AddUser(){

   const [inputs, setInputs] = useState({
    id: "",
    firstname : "",
    lastname : "",
    address : "",
    emailId : "",
    mobileNumber: "",
    role: ""
   });
   const [message,setMessage] = useState("");

   const handleChange = (event) => {

    setInputs({...inputs, [event.target.name]: event.target.value})
   
    }
    
   const handleSubmit = (event) => { 
    event.preventDefault();
    console.log(inputs)
    const addUserUrl = "https://localhost:44304/api/Users";
    axios.post(addUserUrl,inputs).then(res => {
        console.log(res);
        setMessage(
            <div className="message">
              <div className="alert alert-success" role="alert">
                "User added successfully!"
              </div>
          </div>)   
         window.location.href = '/';
    })
    
}

    return(
        
         <AddUserWrapper>
            <Grid container spacing={4}>
                <Grid item xs={12} sm={6} md={8}>
                <span style={{display: "flex", justifyContent:'center'}}>
                <Typography className='mt-5' variant='h6'>Add User</Typography>
                </span>
                </Grid>
               
            </Grid>

            <Grid container spacing={12} style={{display: "flex", justifyContent:'center'}}>
                <Grid item xs={12} sm={8} md={8}>
                    <div className="wrapperWhite">
                        <Grid item xs={12} sm={12} md={6}>
                                 <TextField label="Id" style={{width:  "100%"}} variant="standard" name = "id" value={inputs.id} onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                                 <TextField label="First Name" style={{width:  "100%"}}  variant="standard" name = "firstname" value={inputs.firstname} onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                                 <TextField label="Last Name" style={{width:  "100%"}}  variant="standard" name= "lastname" value={inputs.lastname} onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                                 <TextField label="Address" style={{width:  "100%"}}  variant="standard" name= "address" value={inputs.address} onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                                 <TextField label="Email Id" style={{width:  "100%"}}  variant="standard" name= "emailId" value={inputs.emailId} onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                                 <TextField label="Mobile Number" style={{width:  "100%"}}  variant="standard" name= "mobileNumber" value={inputs.mobileNumber} onChange={handleChange}/>
                        </Grid>
                        <Grid item xs={12} sm={4} md={6}>
                                 <TextField label="Role" style={{width:  "100%"}}  variant="standard" name= "role" value={inputs.role} onChange={handleChange}/>
                        </Grid>
                        <Grid container spacing={4} className="mt-3">
                            <Grid item xs={12} sm={12} md={12} >
                                <Button type="button" variant="outlined" color="primary" className="noShadow cancelBtn" onClick={() => window.location.href = "/"}>
                                    Cancel
                                </Button>&nbsp;&nbsp;
                                <Button type="submit" variant="contained" color="primary" 
                                onClick={handleSubmit} 
                                className="noShadow addBtn">
                                    Submit
                                </Button>
                                <br></br>
                                <br></br>
                                {message}
                            </Grid>
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </AddUserWrapper>
    )
}