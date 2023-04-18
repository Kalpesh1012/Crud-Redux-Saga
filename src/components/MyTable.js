import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from '@mui/material'
import { setUserSlice } from '../containers/usersSlice';
import { DELETE_USER_BY_ID, GET_USERS } from './sagas/types';
import { Link } from 'react-router-dom';



export default function MyTable() {
    const rows=useSelector(store=>store.user)
    console.log(rows)
    const dispatch=useDispatch();
    React.useEffect(()=>{
        dispatch({type:GET_USERS})
    })
  return (
    <div>
      <h1 style={{marginTop:"80px",marginLeft:"650px"}}>Saga Data</h1>
    <TableContainer sx={{marginTop:"10px"}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">L-Name</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Edit</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.lname}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right"><Link to="/"><Button  fullWidth variant='contained' onClick={()=>{
                  dispatch(setUserSlice(row))
                  
              }}>Edit</Button></Link></TableCell>
              <TableCell align="right"><Button fullWidth variant='contained' onClick={()=>{
                dispatch({type:DELETE_USER_BY_ID,id:row.id})
              }}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}