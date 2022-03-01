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


function EdwardTable() {

    const [EdwardData,setEdwardData] = useState([]);
    const [EdwardEvergreen,setEdwardEvergreen] = useState([]);
    const[EdwardDeciduous,setEdwardDeciduous] = useState([]);
    const[EdwardEndemic,setEdwardEndemic] = useState([]);
    const[EdwardIndigenous,setEdwardIndigenous] = useState([]);
    const[EdwardExotic,setEdwardExotic] = useState([]);
    const[EdwardEndangered,setEdwardEndangered] = useState([]);

    const [EdwardSemiDeciduousPhenology, setEdwardSemiDeciduousPhenology] = useState([]);

  
    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Evergreen").then(res=> {
        console.log(res.data)
        setEdwardEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/edward_park_Deciduous").then(res=> {
        console.log(res.data)
        setEdwardDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endemic").then(res=> {
        console.log(res.data)
        setEdwardEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Indigenous").then(res=> {
        console.log(res.data)
        setEdwardIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Exotic").then(res=> {
        console.log(res.data)
        setEdwardExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/edward_park_Endangered").then(res=> {
        console.log(res.data)
        setEdwardEndangered(res.data)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=edward_park").then((res) => {
      console.log(res.data.length);
      setEdwardSemiDeciduousPhenology(res.data);
    });
      },[])
  
  
  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous</TableCell>
            <TableCell align="right">{EdwardDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen</TableCell>
            <TableCell align="right">{EdwardEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of semi Deciduous (Phenology)</TableCell>
            <TableCell align="right">{EdwardSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-endemic")}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{EdwardEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-indigenous")}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{EdwardIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-exotic")}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{EdwardExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Edward_Park/Edward_Park-endangered")}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{EdwardEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
  }

export default EdwardTable;
