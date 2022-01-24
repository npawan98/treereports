import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";

function Table_Park_opp_wine_board_exotic() {

    const[Park_opp_wine_boardExotic,setPark_opp_wine_boardExotic] = useState([]);

    useEffect(()=>{
      axios.get("https://afternoon-mountain-93761.herokuapp.com/Park_opp_wine_board_Exotic").then(res=> {
        console.log(res.data)
        setPark_opp_wine_boardExotic(res.data)
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
                            Park_opp_wine_boardExotic.map((item) =>{
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

export default Table_Park_opp_wine_board_exotic
