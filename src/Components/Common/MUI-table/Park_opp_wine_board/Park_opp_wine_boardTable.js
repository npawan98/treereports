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


function Park_opp_wine_boardTable() {

    const [Park_opp_wine_boardData,setPark_opp_wine_boardData] = useState([]);
    const [Park_opp_wine_boardEvergreen,setPark_opp_wine_boardEvergreen] = useState([]);
    const[Park_opp_wine_boardDeciduous,setPark_opp_wine_boardDeciduous] = useState([]);
    const[Park_opp_wine_boardEndemic,setPark_opp_wine_boardEndemic] = useState([]);
    const[Park_opp_wine_boardIndigenous,setPark_opp_wine_boardIndigenous] = useState([]);
    const[Park_opp_wine_boardExotic,setPark_opp_wine_boardExotic] = useState([]);
    const[Park_opp_wine_boardEndangered,setPark_opp_wine_boardEndangered] = useState([]);

    const [Park_opp_wine_boardSemiDeciduousPhenology, setPark_opp_wine_boardSemiDeciduousPhenology] = useState([]);

    
    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_wine_board_Evergreen").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Park_opp_wine_board_Deciduous").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Endemic").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Indigenous").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Exotic").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Endangered").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=park_opp_wine_board").then((res) => {
      console.log(res.data.length);
      setPark_opp_wine_boardSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_wine_boardDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_wine_boardEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Park_opp_wine_boardSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Park_opp_wine_boardEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Park_opp_wine_boardIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Park_opp_wine_boardExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Park_opp_wine_board/Park_opp_wine_board-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Park_opp_wine_boardEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Park_opp_wine_boardTable;
