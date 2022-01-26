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


function Central_libraryTable_ConservationStatus() {

    const [Central_libraryLeastConcern,setLeastConcern] = useState([]);
    const[Central_libraryNotknown,setCentral_libraryNotknown] = useState([]);
    const[Central_libraryNearThreatened,setCentral_libraryNearThreatened] = useState([]);
    const[Central_libraryVulnerable,setCentral_libraryVulnerable] = useState([]);
    const[Central_libraryCriticallyEndangered,setCentral_libraryCriticallyEndangered] = useState([]);
    const[Central_libraryConservationDependent,setCentral_libraryConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryNotknown").then(res=> {
        console.log(res.data)
        setCentral_libraryNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryNearThreatened").then(res=> {
        console.log(res.data)
        setCentral_libraryNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryVulnerable").then(res=> {
        console.log(res.data)
        setCentral_libraryVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryCriticallyEndangered").then(res=> {
        console.log(res.data)
        setCentral_libraryCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Central_libraryConservationDependent").then(res=> {
        console.log(res.data)
        setCentral_libraryConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Central_library/conservationstatus/Central_library-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Central_libraryLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Central_library/conservationstatus/Central_library-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Central_libraryNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/conservationstatus/Central_library-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Central_libraryNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/conservationstatus/Central_library-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Central_libraryVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/conservationstatus/Central_library-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Central_libraryCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/conservationstatus/Central_library-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Central_libraryConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Central_libraryTable_ConservationStatus;
