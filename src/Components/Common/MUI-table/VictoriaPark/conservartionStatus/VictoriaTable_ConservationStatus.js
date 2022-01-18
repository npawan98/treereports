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


function VictoriaTable_ConservationStatus() {

    const [VictoriaLeastConcern,setLeastConcern] = useState([]);
    const[VictoriaNotknown,setVictoriaNotknown] = useState([]);
    const[VictoriaNearThreatened,setVictoriaNearThreatened] = useState([]);
    const[VictoriaVulnerable,setVictoriaVulnerable] = useState([]);
    const[VictoriaCriticallyEndangered,setVictoriaCriticallyEndangered] = useState([]);
    const[VictoriaConservationDependent,setVictoriaConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaNotknown").then(res=> {
        console.log(res.data)
        setVictoriaNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaNearThreatened").then(res=> {
        console.log(res.data)
        setVictoriaNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaVulnerable").then(res=> {
        console.log(res.data)
        setVictoriaVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaCriticallyEndangered").then(res=> {
        console.log(res.data)
        setVictoriaCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/VictoriaConservationDependent").then(res=> {
        console.log(res.data)
        setVictoriaConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/conservationstatus/Victoria_Park-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{VictoriaLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Victoria_Park/conservationstatus/Victoria_Park-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{VictoriaNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/conservationstatus/Victoria_Park-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{VictoriaNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/conservationstatus/Victoria_Park-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{VictoriaVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/conservationstatus/Victoria_Park-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{VictoriaCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/conservationstatus/Victoria_Park-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{VictoriaConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default VictoriaTable_ConservationStatus;
