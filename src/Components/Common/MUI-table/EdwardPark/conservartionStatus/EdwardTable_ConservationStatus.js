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


function EdwardTable_ConservationStatus() {

    const [EdwardLeastConcern,setLeastConcern] = useState([]);
    const[EdwardNotknown,setEdwardNotknown] = useState([]);
    const[EdwardNearThreatened,setEdwardNearThreatened] = useState([]);
    const[EdwardVulnerable,setEdwardVulnerable] = useState([]);
    const[EdwardCriticallyEndangered,setEdwardCriticallyEndangered] = useState([]);
    const[EdwardConservationDependent,setEdwardConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardNotknown").then(res=> {
        console.log(res.data)
        setEdwardNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardNearThreatened").then(res=> {
        console.log(res.data)
        setEdwardNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardVulnerable").then(res=> {
        console.log(res.data)
        setEdwardVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardCriticallyEndangered").then(res=> {
        console.log(res.data)
        setEdwardCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/EdwardConservationDependent").then(res=> {
        console.log(res.data)
        setEdwardConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/conservationstatus/Edward_Park-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{EdwardLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Edward_Park/conservationstatus/Edward_Park-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{EdwardNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/conservationstatus/Edward_Park-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{EdwardNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/conservationstatus/Edward_Park-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{EdwardVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/conservationstatus/Edward_Park-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{EdwardCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/conservationstatus/Edward_Park-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{EdwardConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EdwardTable_ConservationStatus;
