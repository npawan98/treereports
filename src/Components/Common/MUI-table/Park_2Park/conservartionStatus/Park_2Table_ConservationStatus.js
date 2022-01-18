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


function Park_2Table_ConservationStatus() {

    const [Park_2LeastConcern,setLeastConcern] = useState([]);
    const[Park_2Notknown,setPark_2Notknown] = useState([]);
    const[Park_2NearThreatened,setPark_2NearThreatened] = useState([]);
    const[Park_2Vulnerable,setPark_2Vulnerable] = useState([]);
    const[Park_2CriticallyEndangered,setPark_2CriticallyEndangered] = useState([]);
    const[Park_2ConservationDependent,setPark_2ConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2LeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2Notknown").then(res=> {
        console.log(res.data)
        setPark_2Notknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2NearThreatened").then(res=> {
        console.log(res.data)
        setPark_2NearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2Vulnerable").then(res=> {
        console.log(res.data)
        setPark_2Vulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2CriticallyEndangered").then(res=> {
        console.log(res.data)
        setPark_2CriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2ConservationDependent").then(res=> {
        console.log(res.data)
        setPark_2ConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/conservationstatus/Park_2_Park-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Park_2LeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_2_Park/conservationstatus/Park_2_Park-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Park_2Notknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/conservationstatus/Park_2_Park-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Park_2NearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/conservationstatus/Park_2_Park-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Park_2Vulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/conservationstatus/Park_2_Park-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Park_2CriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/conservationstatus/Park_2_Park-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Park_2ConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_2Table_ConservationStatus;
