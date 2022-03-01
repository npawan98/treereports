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


function SnakeTable() {

    const [SnakeData,setSnakeData] = useState([]);
    const [SnakeEvergreen,setSnakeEvergreen] = useState([]);
    const[SnakeDeciduous,setSnakeDeciduous] = useState([]);
    const[SnakeEndemic,setSnakeEndemic] = useState([]);
    const[SnakeIndigenous,setSnakeIndigenous] = useState([]);
    const[SnakeExotic,setSnakeExotic] = useState([]);
    const[SnakeEndangered,setSnakeEndangered] = useState([]);

    const [SnakeSemiDeciduousPhenology, setSnakeSemiDeciduousPhenology] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/SnakeEvergreen").then(res=> {
        console.log(res.data)
        setSnakeEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/SnakeDeciduous").then(res=> {
        console.log(res.data)
        setSnakeDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEndemic").then(res=> {
        console.log(res.data)
        setSnakeEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeIndigenous").then(res=> {
        console.log(res.data)
        setSnakeIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeExotic").then(res=> {
        console.log(res.data)
        setSnakeExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/SnakeEndangered").then(res=> {
        console.log(res.data)
        setSnakeEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=snake_park").then((res) => {
          console.log(res.data.length);
          setSnakeSemiDeciduousPhenology(res.data);
        });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{SnakeDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{SnakeEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi-Deciduous (Phenology)</TableCell>
            <TableCell align="right">{SnakeSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{SnakeEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{SnakeIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{SnakeExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{SnakeEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SnakeTable;
