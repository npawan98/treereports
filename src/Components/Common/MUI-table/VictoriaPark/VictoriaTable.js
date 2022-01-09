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


function VictoriaTable() {

    const [VictoriaData,setVictoriaData] = useState([]);
    const [VictoriaEvergreen,setVictoriaEvergreen] = useState([]);
    const[VictoriaDeciduous,setVictoriaDeciduous] = useState([]);
    const[VictoriaEndemic,setVictoriaEndemic] = useState([]);
    const[VictoriaIndigenous,setVictoriaIndigenous] = useState([]);
    const[VictoriaExotic,setVictoriaExotic] = useState([]);
    const[VictoriaEndangered,setVictoriaEndangered] = useState([]);
  
    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Victoria_park_Evergreen").then(res=> {
        console.log(res.data)
        setVictoriaEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Victoria_park_Deciduous").then(res=> {
        console.log(res.data)
        setVictoriaDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Endemic").then(res=> {
        console.log(res.data)
        setVictoriaEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Indigenous").then(res=> {
        console.log(res.data)
        setVictoriaIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Exotic").then(res=> {
        console.log(res.data)
        setVictoriaExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Victoria_park_Endangered").then(res=> {
        console.log(res.data)
        setVictoriaEndangered(res.data)
    })
      },[])
  
  
  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/Victoria_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous</TableCell>
            <TableCell align="right">{VictoriaDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Victoria_Park/Victoria_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen</TableCell>
            <TableCell align="right">{VictoriaEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/Victoria_Park-endemic")}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{VictoriaEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/Victoria_Park-indigenous")}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{VictoriaIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/Victoria_Park-exotic")}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{VictoriaExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Victoria_Park/Victoria_Park-endangered")}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{VictoriaEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  }

export default VictoriaTable;
