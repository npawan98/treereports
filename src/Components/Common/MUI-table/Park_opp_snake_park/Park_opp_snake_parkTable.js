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


function Park_opp_snake_parkTable() {

    const [Park_opp_snake_parkData,setPark_opp_snake_parkData] = useState([]);
    const [Park_opp_snake_parkEvergreen,setPark_opp_snake_parkEvergreen] = useState([]);
    const[Park_opp_snake_parkDeciduous,setPark_opp_snake_parkDeciduous] = useState([]);
    const[Park_opp_snake_parkEndemic,setPark_opp_snake_parkEndemic] = useState([]);
    const[Park_opp_snake_parkIndigenous,setPark_opp_snake_parkIndigenous] = useState([]);
    const[Park_opp_snake_parkExotic,setPark_opp_snake_parkExotic] = useState([]);
    const[Park_opp_snake_parkEndangered,setPark_opp_snake_parkEndangered] = useState([]);

    const [Park_opp_snake_parkSemiDeciduousPhenology, setPark_opp_snake_parkSemiDeciduousPhenology] = useState([]);
    
    
    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_snake_park_Evergreen").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_snake_park_Deciduous").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Endemic").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Indigenous").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Exotic").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_snake_park_Endangered").then(res=> {
        console.log(res.data)
        setPark_opp_snake_parkEndangered(res.data)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_snake_park").then((res) => {
      console.log(res.data.length);
      setPark_opp_snake_parkSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_snake_parkDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_snake_parkEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi deciduous (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_snake_parkSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Park_opp_snake_parkEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Park_opp_snake_parkIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Park_opp_snake_parkExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_snake_park/Park_opp_snake_park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Park_opp_snake_parkEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_opp_snake_parkTable;
