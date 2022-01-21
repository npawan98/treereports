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


function Park_opp_workers_clubTable_ConservationStatus() {

    const [Park_opp_workers_clubLeastConcern,setLeastConcern] = useState([]);
    const[Park_opp_workers_clubNotknown,setPark_opp_workers_clubNotknown] = useState([]);
    const[Park_opp_workers_clubNearThreatened,setPark_opp_workers_clubNearThreatened] = useState([]);
    const[Park_opp_workers_clubVulnerable,setPark_opp_workers_clubVulnerable] = useState([]);
    const[Park_opp_workers_clubCriticallyEndangered,setPark_opp_workers_clubCriticallyEndangered] = useState([]);
    const[Park_opp_workers_clubConservationDependent,setPark_opp_workers_clubConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubNotknown").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubNearThreatened").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubVulnerable").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubCriticallyEndangered").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_workers_clubConservationDependent").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/conservationstatus/Park_opp_workers_club-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Park_opp_workers_clubLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/conservationstatus/Park_opp_workers_club-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Park_opp_workers_clubNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/conservationstatus/Park_opp_workers_club-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Park_opp_workers_clubNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/conservationstatus/Park_opp_workers_club-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Park_opp_workers_clubVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/conservationstatus/Park_opp_workers_club-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Park_opp_workers_clubCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/conservationstatus/Park_opp_workers_club-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Park_opp_workers_clubConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_opp_workers_clubTable_ConservationStatus;
