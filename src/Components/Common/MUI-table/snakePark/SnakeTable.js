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

    const [snakeData,setSnakeData] = useState([]);
    const [snakeEvergreen,setSnakeEvergreen] = useState([]);
    const[snakeDeciduous,setSnakeDeciduous] = useState([]);
    const[snakeEndemic,setSnakeEndemic] = useState([]);
    const[snakeIndigenous,setSnakeIndigenous] = useState([]);
    const[snakeExotic,setSnakeExotic] = useState([]);
    const[snakeEndangered,setSnakeEndangered] = useState([]);
  
    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEvergreen").then(res=> {
        console.log(res.data)
        setSnakeEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeDeciduous").then(res=> {
        console.log(res.data)
        setSnakeDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEndemic").then(res=> {
        console.log(res.data)
        setSnakeEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeIndigenous").then(res=> {
        console.log(res.data)
        setSnakeIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeExotic").then(res=> {
        console.log(res.data)
        setSnakeExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/snakeEndangered").then(res=> {
        console.log(res.data)
        setSnakeEndangered(res.data)
    })
      },[])
  
  
  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous</TableCell>
            <TableCell align="right">{snakeDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Snake_Park/Snake_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen</TableCell>
            <TableCell align="right">{snakeEvergreen.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{snakeEndemic.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{snakeIndigenous.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{snakeExotic.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{snakeEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  }

export default SnakeTable;
