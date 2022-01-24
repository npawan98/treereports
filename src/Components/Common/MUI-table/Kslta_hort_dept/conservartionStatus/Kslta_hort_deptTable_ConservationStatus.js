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


function Kslta_hort_deptTable_ConservationStatus() {

    const [Kslta_hort_deptLeastConcern,setLeastConcern] = useState([]);
    const[Kslta_hort_deptNotknown,setKslta_hort_deptNotknown] = useState([]);
    const[Kslta_hort_deptNearThreatened,setKslta_hort_deptNearThreatened] = useState([]);
    const[Kslta_hort_deptVulnerable,setKslta_hort_deptVulnerable] = useState([]);
    const[Kslta_hort_deptCriticallyEndangered,setKslta_hort_deptCriticallyEndangered] = useState([]);
    const[Kslta_hort_deptConservationDependent,setKslta_hort_deptConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptNotknown").then(res=> {
        console.log(res.data)
        setKslta_hort_deptNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptNearThreatened").then(res=> {
        console.log(res.data)
        setKslta_hort_deptNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptVulnerable").then(res=> {
        console.log(res.data)
        setKslta_hort_deptVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptCriticallyEndangered").then(res=> {
        console.log(res.data)
        setKslta_hort_deptCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Kslta_hort_deptConservationDependent").then(res=> {
        console.log(res.data)
        setKslta_hort_deptConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/conservationstatus/Kslta_hort_dept-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Kslta_hort_deptLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/conservationstatus/Kslta_hort_dept-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Kslta_hort_deptNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/conservationstatus/Kslta_hort_dept-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Kslta_hort_deptNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/conservationstatus/Kslta_hort_dept-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Kslta_hort_deptVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/conservationstatus/Kslta_hort_dept-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Kslta_hort_deptCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/conservationstatus/Kslta_hort_dept-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Kslta_hort_deptConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Kslta_hort_deptTable_ConservationStatus;
