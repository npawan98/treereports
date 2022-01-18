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


function Park_1Table_ConservationStatus() {

    const [Park_1LeastConcern,setLeastConcern] = useState([]);
    const[Park_1Notknown,setPark_1Notknown] = useState([]);
    const[Park_1NearThreatened,setPark_1NearThreatened] = useState([]);
    const[Park_1Vulnerable,setPark_1Vulnerable] = useState([]);
    const[Park_1CriticallyEndangered,setPark_1CriticallyEndangered] = useState([]);
    const[Park_1ConservationDependent,setPark_1ConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1LeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1Notknown").then(res=> {
        console.log(res.data)
        setPark_1Notknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1NearThreatened").then(res=> {
        console.log(res.data)
        setPark_1NearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1Vulnerable").then(res=> {
        console.log(res.data)
        setPark_1Vulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1CriticallyEndangered").then(res=> {
        console.log(res.data)
        setPark_1CriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_1ConservationDependent").then(res=> {
        console.log(res.data)
        setPark_1ConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/conservationstatus/Park_1_Park-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Park_1LeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_1_Park/conservationstatus/Park_1_Park-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Park_1Notknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/conservationstatus/Park_1_Park-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Park_1NearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/conservationstatus/Park_1_Park-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Park_1Vulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/conservationstatus/Park_1_Park-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Park_1CriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_1_Park/conservationstatus/Park_1_Park-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Park_1ConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_1Table_ConservationStatus;
