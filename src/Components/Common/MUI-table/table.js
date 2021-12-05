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

    useEffect(()=>{
        axios.get("http://localhost:8081/dogEvergreen").then(res=> {
        console.log(res.data)
        setDogEvergreen(res.data)
        
      })
      axios.get("http://localhost:8081/dogDeciduous").then(res=> {
        console.log(res.data)
        setDogDeciduous(res.data)
    })
    axios.get("http://localhost:8081/dogEndemic").then(res=> {
        console.log(res.data)
        setDogEndemic(res.data)
    })
    axios.get("http://localhost:8081/dogIndigenous").then(res=> {
        console.log(res.data)
        setDogIndigenous(res.data)
    })
    axios.get("http://localhost:8081/dogExotic").then(res=> {
        console.log(res.data)
        setDogExotic(res.data)
    })
    axios.get("http://localhost:8081/dogExotic").then(res=> {
        console.log(res.data)
        setDogEndangered(res.data)
    })
      },[])


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Dog_Park/Dog_Park-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous</TableCell>
            <TableCell align="right">{dogDeciduous.length}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow>
            <TableCell>Number of evergreen</TableCell>
            <TableCell align="right">{dogEvergreen.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{dogEndemic.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{dogIndigenous.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{dogExotic.length}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>endangered</TableCell>
            <TableCell align="right">{dogEndangered.length}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DogTable;
