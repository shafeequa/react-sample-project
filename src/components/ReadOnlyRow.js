import React from "react";
import { TableBody, TableHead, TableCell , TableContainer, TableRow, Tooltip} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

const ReadOnlyRow = ({ row, handleEditUser, handleDeleteUser, handleViewUser }) => {
  return (

    <TableRow key={row.id}>
    <TableCell>{row.firstname}</TableCell>
    <TableCell align="right">{row.lastname}</TableCell>
    <TableCell align="right">{row.address}</TableCell>
    <TableCell align="right">{row.emailId}</TableCell>
    <TableCell align="right">{row.mobileNumber}</TableCell>
    <TableCell align="right">{row.role}</TableCell>
    <TableCell align="right">
        <Tooltip title="View" aria-label="View">
        <IconButton className="actionBtn" onClick = {()=> handleViewUser(row.id,row)}>
        <VisibilityIcon className="actionIcon" />
        </IconButton >
        </Tooltip>

        <Tooltip title="Edit" aria-label="Edit">
        <IconButton className="actionBtn" onClick={()=> handleEditUser(row, row.id)}>
        <EditIcon className="actionIcon"/>
        </IconButton>
        </Tooltip>
        <Tooltip title="Delete" aria-label="Delete">
        <IconButton className="actionBtn" onClick={()=> handleDeleteUser(row.id)}>
        <DeleteIcon className="actionIcon"/>
        </IconButton>
        </Tooltip>
    </TableCell>
    </TableRow>
  );
};

export default ReadOnlyRow;