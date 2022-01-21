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


function Park_opp_snake_parkTable_ConservationStatus() {

    const [Park_opp_snake_parkLeastConcern,setLeastConcern] = useState([]);
    const[Park_opp_snake_parkNotknown,setPark_opp_snake_parkNotknown] = useState([]);
    const[Park_opp_snake_parkNearThreatened,setPark_opp_snake_parkNearThreatened] = useState([]);
    const[Park_opp_snake_parkVulnerable,setPark_opp_snake_parkVulnerable] = useState([]);
    const[Park_opp_snake_parkCriticallyEndangered,setPark_opp_snake_parkCriticallyEndangered] = useState([]);
    const[Park_opp_snake_parkConservationDependent,setPark_opp_snake_parkConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkNotknown").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkNearThreatened").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkVulnerable").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkCriticallyEndangered").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_snake_parkConservationDependent").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/conservationstatus/Park_opp_snake_park-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Park_opp_snake_parkLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/conservationstatus/Park_opp_snake_park-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Park_opp_snake_parkNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/conservationstatus/Park_opp_snake_park-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Park_opp_snake_parkNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/conservationstatus/Park_opp_snake_park-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Park_opp_snake_parkVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/conservationstatus/Park_opp_snake_park-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Park_opp_snake_parkCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/conservationstatus/Park_opp_snake_park-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Park_opp_snake_parkConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_opp_snake_parkTable_ConservationStatus;
