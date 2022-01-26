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


function Lotus_pond_kargadhakunteTable_ConservationStatus() {

    const [Lotus_pond_kargadhakunteLeastConcern,setLeastConcern] = useState([]);
    const[Lotus_pond_kargadhakunteNotknown,setLotus_pond_kargadhakunteNotknown] = useState([]);
    const[Lotus_pond_kargadhakunteNearThreatened,setLotus_pond_kargadhakunteNearThreatened] = useState([]);
    const[Lotus_pond_kargadhakunteVulnerable,setLotus_pond_kargadhakunteVulnerable] = useState([]);
    const[Lotus_pond_kargadhakunteCriticallyEndangered,setLotus_pond_kargadhakunteCriticallyEndangered] = useState([]);
    const[Lotus_pond_kargadhakunteConservationDependent,setLotus_pond_kargadhakunteConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteNotknown").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteNearThreatened").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteVulnerable").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteCriticallyEndangered").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Lotus_pond_kargadhakunteConservationDependent").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/conservationstatus/Lotus_pond_kargadhakunte-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/conservationstatus/Lotus_pond_kargadhakunte-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/conservationstatus/Lotus_pond_kargadhakunte-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/conservationstatus/Lotus_pond_kargadhakunte-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/conservationstatus/Lotus_pond_kargadhakunte-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/conservationstatus/Lotus_pond_kargadhakunte-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Lotus_pond_kargadhakunteTable_ConservationStatus;
