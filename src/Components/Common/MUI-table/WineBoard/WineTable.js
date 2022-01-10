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


function WineTable() {

    const [WineData,setWineData] = useState([]);
    const [WineEvergreen,setWineEvergreen] = useState([]);
    const[WineDeciduous,setWineDeciduous] = useState([]);
    const[WineEndemic,setWineEndemic] = useState([]);
    const[WineIndigenous,setWineIndigenous] = useState([]);
    const[WineExotic,setWineExotic] = useState([]);
    const[WineEndangered,setWineEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Evergreen").then(res=> {
        console.log(res.data)
        setWineEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/wine_board_Deciduous").then(res=> {
        console.log(res.data)
        setWineDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Endemic").then(res=> {
        console.log(res.data)
        setWineEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Indigenous").then(res=> {
        console.log(res.data)
        setWineIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Exotic").then(res=> {
        console.log(res.data)
        setWineExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/wine_board_Endangered").then(res=> {
        console.log(res.data)
        setWineEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Wine_Board/Wine_Board-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{WineDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Wine_Board/Wine_Board-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{WineEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Wine_Board/Wine_Board-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{WineEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Wine_Board/Wine_Board-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{WineIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Wine_Board/Wine_Board-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{WineExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Wine_Board/Wine_Board-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{WineEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default WineTable;
