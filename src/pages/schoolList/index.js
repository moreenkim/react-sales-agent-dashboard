import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import Header from "../../components/Header";
import axios from "axios";
import {Table,TableBody, TableContainer, TableHead, TableRow, Paper} from "@mui/material"
import { StyledTableCell, StyledTableRow } from "../../components/tableStyle";

const SchoolList = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/schools")
      .then(res => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
  
    <TableContainer component={Paper} sx={{ mr: '20px', width: 'auto' }}>
         <Box display="flex" justifyContent="space-between" margin="20px" alignItems="center">
        <Header title="School Listing" />
      </Box>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">County</StyledTableCell>
            <StyledTableCell align="right">Products</StyledTableCell>
            <StyledTableCell align="right">Balances</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.county}</StyledTableCell>
              <StyledTableCell align="right">{row.product}</StyledTableCell>
              <StyledTableCell align="right">{row.balances}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default SchoolList;