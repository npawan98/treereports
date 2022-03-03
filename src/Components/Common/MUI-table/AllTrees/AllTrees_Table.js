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


function AllTrees_Table({num1, num2, num3, num4, num5, num6,num7}) {


  return (
    <TableContainer component={Paper} style={{maxWidth:'650px'}}>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of deciduous (Phenology)</TableCell>
            <TableCell align="right">{num1}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-evergreen")}} style={{cursor:"pointer"}}>
            <TableCell>Number of evergreen (Phenology)</TableCell>
            <TableCell align="right">{num2}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-deciduous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of Semi deciduous (Phenology)</TableCell>
            <TableCell align="right">{num7}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-endemic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of endemic </TableCell>
            <TableCell align="right">{num3}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-indigenous")}} style={{cursor:"pointer"}}>
            <TableCell>Number of indigenous</TableCell>
            <TableCell align="right">{num4}</TableCell>
          </TableRow>
          <TableRow onClick={()=>{window.location.assign("/Avenue_trees/Avenue_trees-exotic")}} style={{cursor:"pointer"}}>
            <TableCell>Number of exotic</TableCell>
            <TableCell align="right">{num5}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default AllTrees_Table;
