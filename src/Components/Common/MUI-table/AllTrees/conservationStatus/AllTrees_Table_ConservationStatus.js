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


function AllTrees_Table_ConservationStatus({num1, num2, num3, num4, num5, num6}) {

  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-LeastConcern")}} style={{cursor:"pointer"}}>
            <TableCell>Least Concern</TableCell>
            <TableCell align="right">{num1}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-NotKnown")}} style={{cursor:"pointer"}}>
            <TableCell>Not known</TableCell>
            <TableCell align="right">{num2}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-NearThreatened")}} style={{cursor:"pointer"}}>
            <TableCell>Near Threatened </TableCell>
            <TableCell align="right">{num3}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-Vulnerable")}} style={{cursor:"pointer"}}>
            <TableCell>Vulnerable</TableCell>
            <TableCell align="right">{num4}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-CriticallyEndangered")}} style={{cursor:"pointer"}}>
            <TableCell>Critically endangered</TableCell>
            <TableCell align="right">{num5}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/conservationstatus/Avenue_trees-ConservationDependent")}} style={{cursor:"pointer"}}>
            <TableCell>Conservation dependent</TableCell>
            <TableCell align="right">{num6}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AllTrees_Table_ConservationStatus;
