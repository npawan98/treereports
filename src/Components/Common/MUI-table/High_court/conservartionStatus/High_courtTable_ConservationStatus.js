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


function High_courtTable_ConservationStatus() {

    const [High_courtLeastConcern,setLeastConcern] = useState([]);
    const[High_courtNotknown,setHigh_courtNotknown] = useState([]);
    const[High_courtNearThreatened,setHigh_courtNearThreatened] = useState([]);
    const[High_courtVulnerable,setHigh_courtVulnerable] = useState([]);
    const[High_courtCriticallyEndangered,setHigh_courtCriticallyEndangered] = useState([]);
    const[High_courtConservationDependent,setHigh_courtConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkNotknown").then(res=> {
        console.log(res.data)
        setHigh_courtNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkNearThreatened").then(res=> {
        console.log(res.data)
        setHigh_courtNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkVulnerable").then(res=> {
        console.log(res.data)
        setHigh_courtVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkCriticallyEndangered").then(res=> {
        console.log(res.data)
        setHigh_courtCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/high_court_parkConservationDependent").then(res=> {
        console.log(res.data)
        setHigh_courtConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/High_court/conservationstatus/High_court-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{High_courtLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/High_court/conservationstatus/High_court-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{High_courtNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/conservationstatus/High_court-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{High_courtNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/conservationstatus/High_court-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{High_courtVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/conservationstatus/High_court-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{High_courtCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/conservationstatus/High_court-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{High_courtConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default High_courtTable_ConservationStatus;
