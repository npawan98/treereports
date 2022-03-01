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


function Avenue_treesTable() {

    const [Avenue_treesData,setAvenue_treesData] = useState([]);
    const [Avenue_treesEvergreen,setAvenue_treesEvergreen] = useState([]);
    const[Avenue_treesDeciduous,setAvenue_treesDeciduous] = useState([]);
    const[Avenue_treesEndemic,setAvenue_treesEndemic] = useState([]);
    const[Avenue_treesIndigenous,setAvenue_treesIndigenous] = useState([]);
    const[Avenue_treesExotic,setAvenue_treesExotic] = useState([]);
    const[Avenue_treesEndangered,setAvenue_treesEndangered] = useState([]);

    const [Avenue_treesSemiDeciduousPhenology, setAvenue_treesSemiDeciduousPhenology] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Avenue_trees_Evergreen").then(res=> {
        console.log(res.data)
        setAvenue_treesEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Avenue_trees_Deciduous").then(res=> {
        console.log(res.data)
        setAvenue_treesDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Endemic").then(res=> {
        console.log(res.data)
        setAvenue_treesEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Indigenous").then(res=> {
        console.log(res.data)
        setAvenue_treesIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Exotic").then(res=> {
        console.log(res.data)
        setAvenue_treesExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Avenue_trees_Endangered").then(res=> {
        console.log(res.data)
        setAvenue_treesEndangered(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=avenue_trees").then((res) => {
      console.log(res.data.length);
      setAvenue_treesSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Avenue_treesDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Avenue_treesEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi Deciduous (Phenology)</TableCell>
            <TableCell align="right">{Avenue_treesSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Avenue_treesEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Avenue_treesIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Avenue_treesExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Avenue_treesEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Avenue_treesTable;
