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


function Park_opp_wine_boardTable_ConservationStatus() {

    const [Park_opp_wine_boardLeastConcern,setLeastConcern] = useState([]);
    const[Park_opp_wine_boardNotknown,setPark_opp_wine_boardNotknown] = useState([]);
    const[Park_opp_wine_boardNearThreatened,setPark_opp_wine_boardNearThreatened] = useState([]);
    const[Park_opp_wine_boardVulnerable,setPark_opp_wine_boardVulnerable] = useState([]);
    const[Park_opp_wine_boardCriticallyEndangered,setPark_opp_wine_boardCriticallyEndangered] = useState([]);
    const[Park_opp_wine_boardConservationDependent,setPark_opp_wine_boardConservationDependent] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardLeastConcern").then(res=> {
        console.log(res.data)
        setLeastConcern(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardNotknown").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardNotknown(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardNearThreatened").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardNearThreatened(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardVulnerable").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardVulnerable(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardCriticallyEndangered").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardCriticallyEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_opp_wine_boardConservationDependent").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardConservationDependent(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/conservationstatus/Park_opp_wine_board-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{Park_opp_wine_boardLeastConcern.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/conservationstatus/Park_opp_wine_board-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{Park_opp_wine_boardNotknown.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/conservationstatus/Park_opp_wine_board-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{Park_opp_wine_boardNearThreatened.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/conservationstatus/Park_opp_wine_board-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{Park_opp_wine_boardVulnerable.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/conservationstatus/Park_opp_wine_board-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{Park_opp_wine_boardCriticallyEndangered.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/conservationstatus/Park_opp_wine_board-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{Park_opp_wine_boardConservationDependent.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_opp_wine_boardTable_ConservationStatus;
