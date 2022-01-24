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


function Avenue_treesTable_ConservationStatus() {

    const [Avenue_treesLeastConcern,setLeastConcern] = useState([]);
    const[Avenue_treesNotknown,setAvenue_treesNotknown] = useState([]);
    const[Avenue_treesNearThreatened,setAvenue_treesNearThreatened] = useState([]);
    const[Avenue_treesVulnerable,setAvenue_treesVulnerable] = useState([]);
    const[Avenue_treesCriticallyEndangered,setAvenue_treesCriticallyEndangered] = useState([]);
    const[Avenue_treesConservationDependent,setAvenue_treesConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesNotknown").then(res=> {
        console.log(res.data)
        setAvenue_treesNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesNearThreatened").then(res=> {
        console.log(res.data)
        setAvenue_treesNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesVulnerable").then(res=> {
        console.log(res.data)
        setAvenue_treesVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesCriticallyEndangered").then(res=> {
        console.log(res.data)
        setAvenue_treesCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Avenue_treesConservationDependent").then(res=> {
        console.log(res.data)
        setAvenue_treesConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Avenue_treesLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Avenue_treesNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Avenue_treesNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Avenue_treesVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Avenue_treesCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Avenue_treesConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Avenue_treesTable_ConservationStatus;
