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


function WorkersTable() {

    const [WorkersData,setWorkersData] = useState([]);
    const [WorkersEvergreen,setWorkersEvergreen] = useState([]);
    const[WorkersDeciduous,setWorkersDeciduous] = useState([]);
    const[WorkersEndemic,setWorkersEndemic] = useState([]);
    const[WorkersIndigenous,setWorkersIndigenous] = useState([]);
    const[WorkersExotic,setWorkersExotic] = useState([]);
    const[WorkersEndangered,setWorkersEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/WorkersEvergreen").then(res=> {
        console.log(res.data)
        setWorkersEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/WorkersDeciduous").then(res=> {
        console.log(res.data)
        setWorkersDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEndemic").then(res=> {
        console.log(res.data)
        setWorkersEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersIndigenous").then(res=> {
        console.log(res.data)
        setWorkersIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersExotic").then(res=> {
        console.log(res.data)
        setWorkersExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/WorkersEndangered").then(res=> {
        console.log(res.data)
        setWorkersEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Workers_Park/Workers_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{WorkersDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Workers_Park/Workers_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{WorkersEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Workers_Park/Workers_Park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{WorkersEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Workers_Park/Workers_Park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{WorkersIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Workers_Park/Workers_Park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{WorkersExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Workers_Park/Workers_Park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{WorkersEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WorkersTable;
