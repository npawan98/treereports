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


function TriangularTable() {

    const [TriangularData,setTriangularData] = useState([]);
    const [TriangularEvergreen,setTriangularEvergreen] = useState([]);
    const[TriangularDeciduous,setTriangularDeciduous] = useState([]);
    const[TriangularEndemic,setTriangularEndemic] = useState([]);
    const[TriangularIndigenous,setTriangularIndigenous] = useState([]);
    const[TriangularExotic,setTriangularExotic] = useState([]);
    const[TriangularEndangered,setTriangularEndangered] = useState([]);
  
    useEffect(()=>{
        axios.get("http://localhost:8081/TriangularEvergreen").then(res=> {
        console.log(res.data)
        setTriangularEvergreen(res.data)
        
      })
      axios.get("http://localhost:8081/TriangularDeciduous").then(res=> {
        console.log(res.data)
        setTriangularDeciduous(res.data)
    })
    axios.get("http://localhost:8081/TriangularEndemic").then(res=> {
        console.log(res.data)
        setTriangularEndemic(res.data)
    })
    axios.get("http://localhost:8081/TriangularIndigenous").then(res=> {
        console.log(res.data)
        setTriangularIndigenous(res.data)
    })
    axios.get("http://localhost:8081/TriangularExotic").then(res=> {
        console.log(res.data)
        setTriangularExotic(res.data)
    })
    axios.get("http://localhost:8081/TriangularEndangered").then(res=> {
        console.log(res.data)
        setTriangularEndangered(res.data)
    })
      },[])
  
  
  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Triangular_Park/Triangular_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous</TableCell>
            <TableCell align="right">{TriangularDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Triangular_Park/Triangular_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen</TableCell>
            <TableCell align="right">{TriangularEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Triangular_Park/Triangular_Park-endemic")}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{TriangularEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Triangular_Park/Triangular_Park-indigenous")}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{TriangularIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Triangular_Park/Triangular_Park-exotic")}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{TriangularExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Triangular_Park/Triangular_Park-endangered")}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{TriangularEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  }

export default TriangularTable;
