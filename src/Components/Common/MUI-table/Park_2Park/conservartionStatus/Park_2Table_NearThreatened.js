import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

function Park_2Table_NearThreatened() {

    const[Park_2NearThreatened,setPark_2NearThreatened] = useState([]);

    useEffect(()=>{
      axios.get("https://afternoon-mountain-93761.herokuapp.com/conservationstatus/Park_2NearThreatened").then(res=> {
        console.log(res.data)
        setPark_2NearThreatened(res.data)
    })
      },[])

    return (
        <div>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Scientific Name</TableCell>
                            <TableCell>Common Name</TableCell>
                            <TableCell>Family Name</TableCell>
                            <TableCell>Kannada Name</TableCell>
                            <TableCell>Phenology</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            Park_2NearThreatened.map((item) =>{
                                return (
                                    <TableRow>
                                        <TableCell>{item.Scientific_name}</TableCell>
                                        <TableCell>{item.Common_name}</TableCell>
                                        <TableCell>{item.Family_name}</TableCell>
                                        <TableCell>{item.Kannada_name}</TableCell>
                                        <TableCell>{item.Phenology}</TableCell>
                                    </TableRow>

                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Park_2Table_NearThreatened
