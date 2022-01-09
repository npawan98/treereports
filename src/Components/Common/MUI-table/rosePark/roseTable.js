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


function RoseTable() {

    const [RoseData,setRoseData] = useState([]);
    const [RoseEvergreen,setRoseEvergreen] = useState([]);
    const[RoseDeciduous,setRoseDeciduous] = useState([]);
    const[RoseEndemic,setRoseEndemic] = useState([]);
    const[RoseIndigenous,setRoseIndigenous] = useState([]);
    const[RoseExotic,setRoseExotic] = useState([]);
    const[RoseEndangered,setRoseEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/RoseEvergreen").then(res=> {
        console.log(res.data)
        setRoseEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/RoseDeciduous").then(res=> {
        console.log(res.data)
        setRoseDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEndemic").then(res=> {
        console.log(res.data)
        setRoseEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseIndigenous").then(res=> {
        console.log(res.data)
        setRoseIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseExotic").then(res=> {
        console.log(res.data)
        setRoseExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/RoseEndangered").then(res=> {
        console.log(res.data)
        setRoseEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Rose_Park/Rose_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{RoseDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Rose_Park/Rose_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{RoseEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Rose_Park/Rose_Park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{RoseEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Rose_Park/Rose_Park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{RoseIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Rose_Park/Rose_Park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{RoseExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Rose_Park/Rose_Park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{RoseEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RoseTable;
