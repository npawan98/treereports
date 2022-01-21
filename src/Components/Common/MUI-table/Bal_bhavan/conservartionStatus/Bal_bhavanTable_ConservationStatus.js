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


function Bal_bhavanTable_ConservationStatus() {

    const [Bal_bhavanLeastConcern,setLeastConcern] = useState([]);
    const[Bal_bhavanNotknown,setBal_bhavanNotknown] = useState([]);
    const[Bal_bhavanNearThreatened,setBal_bhavanNearThreatened] = useState([]);
    const[Bal_bhavanVulnerable,setBal_bhavanVulnerable] = useState([]);
    const[Bal_bhavanCriticallyEndangered,setBal_bhavanCriticallyEndangered] = useState([]);
    const[Bal_bhavanConservationDependent,setBal_bhavanConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanNotknown").then(res=> {
        console.log(res.data)
        setBal_bhavanNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanNearThreatened").then(res=> {
        console.log(res.data)
        setBal_bhavanNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanVulnerable").then(res=> {
        console.log(res.data)
        setBal_bhavanVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanCriticallyEndangered").then(res=> {
        console.log(res.data)
        setBal_bhavanCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Bal_bhavanConservationDependent").then(res=> {
        console.log(res.data)
        setBal_bhavanConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/conservationstatus/bal_bhavan-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Bal_bhavanLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/bal_bhavan/conservationstatus/bal_bhavan-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Bal_bhavanNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/conservationstatus/bal_bhavan-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Bal_bhavanNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/conservationstatus/bal_bhavan-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Bal_bhavanVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/conservationstatus/bal_bhavan-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Bal_bhavanCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/conservationstatus/bal_bhavan-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Bal_bhavanConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Bal_bhavanTable_ConservationStatus;
