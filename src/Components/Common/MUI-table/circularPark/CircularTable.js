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


function CircularTable() {

    const [CircularData,setCircularData] = useState([]);
    const [CircularEvergreen,setCircularEvergreen] = useState([]);
    const[CircularDeciduous,setCircularDeciduous] = useState([]);
    const[CircularEndemic,setCircularEndemic] = useState([]);
    const[CircularIndigenous,setCircularIndigenous] = useState([]);
    const[CircularExotic,setCircularExotic] = useState([]);
    const[CircularEndangered,setCircularEndangered] = useState([]);

    const [CircularSemiDeciduousPhenology, setCircularSemiDeciduousPhenology] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/CircularEvergreen").then(res=> {
        console.log(res.data)
        setCircularEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/CircularDeciduous").then(res=> {
        console.log(res.data)
        setCircularDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEndemic").then(res=> {
        console.log(res.data)
        setCircularEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularIndigenous").then(res=> {
        console.log(res.data)
        setCircularIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularExotic").then(res=> {
        console.log(res.data)
        setCircularExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/CircularEndangered").then(res=> {
        console.log(res.data)
        setCircularEndangered(res.data)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=circular_Park").then((res) => {
      console.log(res.data.length);
      setCircularSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{CircularDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{CircularEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi Deciduous (Phenology)</TableCell>
            <TableCell align="right">{CircularSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{CircularEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{CircularIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{CircularExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Circular_Park/Circular_Park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{CircularEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CircularTable;
