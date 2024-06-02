import { Box} from "@mui/material";

import Header from "../../components/Header";
import axios from "axios";
import React, { useEffect, useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell, StyledTableRow } from "../../components/tableStyle";

const Collections = () => {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/collections")
      .then(res => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
  
    <TableContainer component={Paper} sx={{ mr: '20px', width: 'auto' }}>
         <Box display="flex" justifyContent="space-between" margin="20px" alignItems="center">
        <Header title="Collections" />
      </Box>

      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Invoice Number</StyledTableCell>
            <StyledTableCell align="right">Collections Number</StyledTableCell>
            <StyledTableCell align="right">Collections Data</StyledTableCell>
            <StyledTableCell align="right">Amount</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.invoicenumber}
              </StyledTableCell>
              <StyledTableCell align="right">{row.collectionnumber}</StyledTableCell>
              <StyledTableCell align="right">{row.collectiondate}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

  );
};

export default Collections;