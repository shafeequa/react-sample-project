import React from "react";
import { TableBody,Grid, TableHead, TableCell , TableContainer, TableRow, TextField} from '@mui/material';
import Button from '@mui/material/Button';

const EditUser = ({row, editFormData, handleEditFormChange, submitFormChange }) => {
    const [message,setMessage] = React.useState("");
return (

<TableRow key={row.id}>
<TableCell>
<TextField label="First Name" style={{width:  "100%"}} variant="outlined" name = "firstname" value={editFormData.firstname}  onChange = {handleEditFormChange}/>
</TableCell>
<TableCell align="right">
<TextField label="Last Name" style={{width:  "100%"}} variant="outlined" name = "lastname" value={editFormData.lastname}  onChange = {handleEditFormChange}/>
</TableCell>
<TableCell align="right">
<TextField label="Address" style={{width:  "100%"}} variant="outlined" name = "address" value={editFormData.address}  onChange = {handleEditFormChange}/>
</TableCell>
<TableCell align="right">
<TextField label="Email" style={{width:  "100%"}} variant="outlined" name = "emailId" value={editFormData.emailId}  onChange = {handleEditFormChange}/>
</TableCell>
<TableCell align="right">
<TextField label="Phone" style={{width:  "100%"}} variant="outlined" name = "mobileNumber" value={editFormData.mobileNumber}  onChange = {handleEditFormChange}/>
</TableCell>
<TableCell align="right">
<TextField label="Role" style={{width:  "100%"}} variant="outlined" name = "role" value={editFormData.role}  onChange = {handleEditFormChange}/>
</TableCell>
<TableCell align="right">
<Grid container spacing={4} >
                            <Grid item xs={12} sm={12} md={6} >
                                <Button type="button" variant="outlined" color="primary" className="noShadow cancelBtn" onClick={() => window.location.href = "/"}>
                                    Cancel
                                </Button>&nbsp;
                                <Button type="submit" variant="contained" color="primary" 
                               onClick = {() => submitFormChange(row.id)}
                                className="noShadow addBtn">
                                    Submit
                                </Button>
                                <br></br>
                                <br></br>
                                {message}
                            </Grid>
                        </Grid>
</TableCell>
</TableRow>
)
};

export default EditUser;