/* eslint-disable import/no-anonymous-default-export */
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


function Park_1Table() {

    const [Park_1Data,setPark_1Data] = useState([]);
    const [Park_1Evergreen,setPark_1Evergreen] = useState([]);
    const[Park_1Deciduous,setPark_1Deciduous] = useState([]);
    const[Park_1Endemic,setPark_1Endemic] = useState([]);
    const[Park_1Indigenous,setPark_1Indigenous] = useState([]);
    const[Park_1Exotic,setPark_1Exotic] = useState([]);
    const[Park_1Endangered,setPark_1Endangered] = useState([]);
  
    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Evergreen").then(res=> {
        console.log(res.data)
        setPark_1Evergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Deciduous").then(res=> {
        console.log(res.data)
        setPark_1Deciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endemic").then(res=> {
        console.log(res.data)
        setPark_1Endemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Indigenous").then(res=> {
        console.log(res.data)
        setPark_1Indigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Exotic").then(res=> {
        console.log(res.data)
        setPark_1Exotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_1Endangered").then(res=> {
        console.log(res.data)
        setPark_1Endangered(res.data)
    })
      },[])
  
  
  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/Park_1_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous</TableCell>
            <TableCell align="right">{Park_1Deciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_1_Park/Park_1_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen</TableCell>
            <TableCell align="right">{Park_1Evergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/Park_1_Park-endemic")}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Park_1Endemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/Park_1_Park-indigenous")}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Park_1Indigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/Park_1_Park-exotic")}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Park_1Exotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/Park_1_Park-endangered")}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Park_1Endangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  }

export default Park_1Table;
