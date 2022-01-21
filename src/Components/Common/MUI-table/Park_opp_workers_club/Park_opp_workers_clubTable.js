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


function Park_opp_workers_clubTable() {

    const [Park_opp_workers_clubData,setPark_opp_workers_clubData] = useState([]);
    const [Park_opp_workers_clubEvergreen,setPark_opp_workers_clubEvergreen] = useState([]);
    const[Park_opp_workers_clubDeciduous,setPark_opp_workers_clubDeciduous] = useState([]);
    const[Park_opp_workers_clubEndemic,setPark_opp_workers_clubEndemic] = useState([]);
    const[Park_opp_workers_clubIndigenous,setPark_opp_workers_clubIndigenous] = useState([]);
    const[Park_opp_workers_clubExotic,setPark_opp_workers_clubExotic] = useState([]);
    const[Park_opp_workers_clubEndangered,setPark_opp_workers_clubEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_workers_club_Evergreen").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_workers_club_Deciduous").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Endemic").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Indigenous").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Exotic").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_workers_club_Endangered").then(res=> {
        console.log(res.data)
        setPark_opp_workers_clubEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/Park_opp_workers_club-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_workers_clubDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/Park_opp_workers_club-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_workers_clubEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/Park_opp_workers_club-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Park_opp_workers_clubEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/Park_opp_workers_club-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Park_opp_workers_clubIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/Park_opp_workers_club-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Park_opp_workers_clubExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_workers_club/Park_opp_workers_club-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Park_opp_workers_clubEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_opp_workers_clubTable;
