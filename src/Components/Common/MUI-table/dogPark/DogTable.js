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


function DogTable() {

    const [dogData,setDogData] = useState([]);
    const [dogEvergreen,setDogEvergreen] = useState([]);
    const[dogDeciduous,setDogDeciduous] = useState([]);
    const[dogEndemic,setDogEndemic] = useState([]);
    const[dogIndigenous,setDogIndigenous] = useState([]);
    const[dogExotic,setDogExotic] = useState([]);
    const[dogEndangered,setDogEndangered] = useState([]);

    const [dogSemiDeciduousPhenology, setDogSemiDeciduousPhenology] = useState([]);


    useEffect(()=>{
        axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogEvergreen").then(res=> {
        console.log(res.data)
        setDogEvergreen(res.data)
        
      })
      axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/dogDeciduous").then(res=> {
        console.log(res.data)
        setDogDeciduous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEndemic").then(res=> {
        console.log(res.data)
        setDogEndemic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogIndigenous").then(res=> {
        console.log(res.data)
        setDogIndigenous(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogExotic").then(res=> {
        console.log(res.data)
        setDogExotic(res.data)
    })
    axios.get("https://afternoon-mountain-93761.herokuapp.com/dogEndangered").then(res=> {
        console.log(res.data)
        setDogEndangered(res.data)
    })

    axios.get("https://afternoon-mountain-93761.herokuapp.com/phenology/semiDeciduous?Park=dog_park").then((res) => {
      console.log(res.data.length);
      setDogSemiDeciduousPhenology(res.data);
    });
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{dogDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{dogEvergreen.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi deciduous (Phenology)</TableCell>
            <TableCell align="right">{dogSemiDeciduousPhenology.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{dogEndemic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{dogIndigenous.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{dogExotic.length}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-endangered")}} style={{cursor:"pointer"}}>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{dogEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DogTable;
