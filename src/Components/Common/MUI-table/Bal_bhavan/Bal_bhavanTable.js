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


function BalBhavanTable() {

    const [BalBhavanData,setBalBhavanData] = useState([]);
    const [BalBhavanEvergreen,setBalBhavanEvergreen] = useState([]);
    const[BalBhavanDeciduous,setBalBhavanDeciduous] = useState([]);
    const[BalBhavanEndemic,setBalBhavanEndemic] = useState([]);
    const[BalBhavanIndigenous,setBalBhavanIndigenous] = useState([]);
    const[BalBhavanExotic,setBalBhavanExotic] = useState([]);
    const[BalBhavanEndangered,setBalBhavanEndangered] = useState([]);
    const [Bal_bhavanSemiDeciduousPhenology, setBal_bhavanSemiDeciduousPhenology] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/bal_bhavan_Evergreen").then(res=> {
        console.log(res.data)
        setBalBhavanEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/bal_bhavan_Deciduous").then(res=> {
        console.log(res.data)
        setBalBhavanDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Endemic").then(res=> {
        console.log(res.data)
        setBalBhavanEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Indigenous").then(res=> {
        console.log(res.data)
        setBalBhavanIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Exotic").then(res=> {
        console.log(res.data)
        setBalBhavanExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/bal_bhavan_Endangered").then(res=> {
        console.log(res.data)
        setBalBhavanEndangered(res.data)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=bal_bhavan").then((res) => {
      console.log(res.data.length);
      setBal_bhavanSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{BalBhavanDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{BalBhavanEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi - Deciduous (Phenology)</TableCell>
            <TableCell align="right">{Bal_bhavanSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{BalBhavanEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{BalBhavanIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{BalBhavanExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/bal_bhavan/bal_bhavan-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{BalBhavanEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default BalBhavanTable;
