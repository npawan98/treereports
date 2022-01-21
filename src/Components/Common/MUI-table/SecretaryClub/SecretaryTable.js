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


function SecretaryTable() {

    const [SecretaryData,setSecretaryData] = useState([]);
    const [SecretaryEvergreen,setSecretaryEvergreen] = useState([]);
    const[SecretaryDeciduous,setSecretaryDeciduous] = useState([]);
    const[SecretaryEndemic,setSecretaryEndemic] = useState([]);
    const[SecretaryIndigenous,setSecretaryIndigenous] = useState([]);
    const[SecretaryExotic,setSecretaryExotic] = useState([]);
    const[SecretaryEndangered,setSecretaryEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/secretary_club_Evergreen").then(res=> {
        console.log(res.data)
        setSecretaryEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/secretary_club_Deciduous").then(res=> {
        console.log(res.data)
        setSecretaryDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Endemic").then(res=> {
        console.log(res.data)
        setSecretaryEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Indigenous").then(res=> {
        console.log(res.data)
        setSecretaryIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Exotic").then(res=> {
        console.log(res.data)
        setSecretaryExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/secretary_club_Endangered").then(res=> {
        console.log(res.data)
        setSecretaryEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Secretary_club/Secretary_club-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{SecretaryDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Secretary_club/Secretary_club-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{SecretaryEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Secretary_club/Secretary_club-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{SecretaryEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Secretary_club/Secretary_club-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{SecretaryIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Secretary_club/Secretary_club-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{SecretaryExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Secretary_club/Secretary_club-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{SecretaryEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SecretaryTable;
