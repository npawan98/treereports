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


function HighCourtTable() {

    const [HighCourtData,setHighCourtData] = useState([]);
    const [HighCourtEvergreen,setHighCourtEvergreen] = useState([]);
    const[HighCourtDeciduous,setHighCourtDeciduous] = useState([]);
    const[HighCourtEndemic,setHighCourtEndemic] = useState([]);
    const[HighCourtIndigenous,setHighCourtIndigenous] = useState([]);
    const[HighCourtExotic,setHighCourtExotic] = useState([]);
    const[HighCourtEndangered,setHighCourtEndangered] = useState([]);

  const [High_courtSemiDeciduousPhenology, setHigh_courtSemiDeciduousPhenology] = useState([]);


    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/high_court_park_Evergreen").then(res=> {
        console.log(res.data)
        setHighCourtEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/high_court_park_Deciduous").then(res=> {
        console.log(res.data)
        setHighCourtDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Endemic").then(res=> {
        console.log(res.data)
        setHighCourtEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Indigenous").then(res=> {
        console.log(res.data)
        setHighCourtIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Exotic").then(res=> {
        console.log(res.data)
        setHighCourtExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/high_court_park_Endangered").then(res=> {
        console.log(res.data)
        setHighCourtEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=high_court_park").then((res) => {
      console.log(res.data.length);
      setHigh_courtSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/High_court/High_court-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{HighCourtDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/High_court/High_court-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{HighCourtEvergreen.length}</TableCell>
          </TableRow>

          <TableRow onClick={()=>{window.location.assign("/High_court/High_court-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi deciduous (Phenology)</TableCell>
            <TableCell align="right">{High_courtSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/High_court-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{HighCourtEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/High_court-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{HighCourtIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/High_court-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{HighCourtExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/High_court/High_court-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{HighCourtEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default HighCourtTable;
