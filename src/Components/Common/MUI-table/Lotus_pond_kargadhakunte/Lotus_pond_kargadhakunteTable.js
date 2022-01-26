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


function Lotus_pond_kargadhakunteTable() {

    const [Lotus_pond_kargadhakunteData,setLotus_pond_kargadhakunteData] = useState([]);
    const [Lotus_pond_kargadhakunteEvergreen,setLotus_pond_kargadhakunteEvergreen] = useState([]);
    const[Lotus_pond_kargadhakunteDeciduous,setLotus_pond_kargadhakunteDeciduous] = useState([]);
    const[Lotus_pond_kargadhakunteEndemic,setLotus_pond_kargadhakunteEndemic] = useState([]);
    const[Lotus_pond_kargadhakunteIndigenous,setLotus_pond_kargadhakunteIndigenous] = useState([]);
    const[Lotus_pond_kargadhakunteExotic,setLotus_pond_kargadhakunteExotic] = useState([]);
    const[Lotus_pond_kargadhakunteEndangered,setLotus_pond_kargadhakunteEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Lotus_pond_kargadhakunte_Evergreen").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Lotus_pond_kargadhakunte_Deciduous").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Endemic").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Indigenous").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Exotic").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Lotus_pond_kargadhakunte_Endangered").then(res=> {
        console.log(res.data)
        setLotus_pond_kargadhakunteEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunte-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunte-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunte-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunte-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunte-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Lotus_pond_kargadhakunte/Lotus_pond_kargadhakunte-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Lotus_pond_kargadhakunteEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Lotus_pond_kargadhakunteTable;
