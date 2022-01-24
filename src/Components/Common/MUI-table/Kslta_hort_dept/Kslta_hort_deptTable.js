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


function Kslta_hort_deptTable() {

    const [Kslta_hort_deptData,setKslta_hort_deptData] = useState([]);
    const [Kslta_hort_deptEvergreen,setKslta_hort_deptEvergreen] = useState([]);
    const[Kslta_hort_deptDeciduous,setKslta_hort_deptDeciduous] = useState([]);
    const[Kslta_hort_deptEndemic,setKslta_hort_deptEndemic] = useState([]);
    const[Kslta_hort_deptIndigenous,setKslta_hort_deptIndigenous] = useState([]);
    const[Kslta_hort_deptExotic,setKslta_hort_deptExotic] = useState([]);
    const[Kslta_hort_deptEndangered,setKslta_hort_deptEndangered] = useState([]);

    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Kslta_hort_dept_Evergreen").then(res=> {
        console.log(res.data)
        setKslta_hort_deptEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Kslta_hort_dept_Deciduous").then(res=> {
        console.log(res.data)
        setKslta_hort_deptDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Endemic").then(res=> {
        console.log(res.data)
        setKslta_hort_deptEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Indigenous").then(res=> {
        console.log(res.data)
        setKslta_hort_deptIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Exotic").then(res=> {
        console.log(res.data)
        setKslta_hort_deptExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Kslta_hort_dept_Endangered").then(res=> {
        console.log(res.data)
        setKslta_hort_deptEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/Kslta_hort_dept-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Kslta_hort_deptDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/Kslta_hort_dept-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Kslta_hort_deptEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/Kslta_hort_dept-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Kslta_hort_deptEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/Kslta_hort_dept-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Kslta_hort_deptIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/Kslta_hort_dept-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Kslta_hort_deptExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Kslta_hort_dept/Kslta_hort_dept-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Kslta_hort_deptEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Kslta_hort_deptTable;
