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


function Central_libraryTable() {

    const [Central_libraryData,setCentral_libraryData] = useState([]);
    const [Central_libraryEvergreen,setCentral_libraryEvergreen] = useState([]);
    const[Central_libraryDeciduous,setCentral_libraryDeciduous] = useState([]);
    const[Central_libraryEndemic,setCentral_libraryEndemic] = useState([]);
    const[Central_libraryIndigenous,setCentral_libraryIndigenous] = useState([]);
    const[Central_libraryExotic,setCentral_libraryExotic] = useState([]);
    const[Central_libraryEndangered,setCentral_libraryEndangered] = useState([]);

    const [Central_librarySemiDeciduousPhenology, setCentral_librarySemiDeciduousPhenology] = useState([]);


    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Central_library_Evergreen").then(res=> {
        console.log(res.data)
        setCentral_libraryEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Central_library_Deciduous").then(res=> {
        console.log(res.data)
        setCentral_libraryDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Endemic").then(res=> {
        console.log(res.data)
        setCentral_libraryEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Indigenous").then(res=> {
        console.log(res.data)
        setCentral_libraryIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Exotic").then(res=> {
        console.log(res.data)
        setCentral_libraryExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/Central_library_Endangered").then(res=> {
        console.log(res.data)
        setCentral_libraryEndangered(res.data)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/Central_library_Deciduous").then((res) => {
      console.log(res.data.length);
      setCentral_librarySemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{Central_libraryDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{Central_libraryEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi deciduous (Phenology)</TableCell>
            <TableCell align="right">{Central_librarySemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{Central_libraryEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{Central_libraryIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{Central_libraryExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Central_library/Central_library-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{Central_libraryEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Central_libraryTable;
