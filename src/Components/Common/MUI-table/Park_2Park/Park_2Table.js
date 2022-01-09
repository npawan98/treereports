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


function Park_2Table() {

    const [Park_2Data,setPark_2Data] = useState([]);
    const [Park_2Evergreen,setPark_2Evergreen] = useState([]);
    const[Park_2Deciduous,setPark_2Deciduous] = useState([]);
    const[Park_2Endemic,setPark_2Endemic] = useState([]);
    const[Park_2Indigenous,setPark_2Indigenous] = useState([]);
    const[Park_2Exotic,setPark_2Exotic] = useState([]);
    const[Park_2Endangered,setPark_2Endangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_2Evergreen").then(res=> {
        console.log(res.data)
        setPark_2Evergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_2Deciduous").then(res=> {
        console.log(res.data)
        setPark_2Deciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endemic").then(res=> {
        console.log(res.data)
        setPark_2Endemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Indigenous").then(res=> {
        console.log(res.data)
        setPark_2Indigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Exotic").then(res=> {
        console.log(res.data)
        setPark_2Exotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_2Endangered").then(res=> {
        console.log(res.data)
        setPark_2Endangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/Park_2_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Park_2Deciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_2_Park/Park_2_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Park_2Evergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/Park_2_Park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Park_2Endemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/Park_2_Park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Park_2Indigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/Park_2_Park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Park_2Exotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_2_Park/Park_2_Park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Park_2Endangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_2Table;
