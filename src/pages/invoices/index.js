import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import Header from "../../components/Header";
import { StyledTableCell, StyledTableRow } from "../../components/tableStyle";
import { DeleteModal } from "../../components/modal/UpdateModal";

const Invoices = () => {
  const [rows, setRows] = useState([]);
  const [editRowId, setEditRowId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    id: "",
    number: "",
    item: "",
    paid: "",
    balance: "",
    created: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8000/invoices")
      .then((res) => setRows(res.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleEditClick = (row) => {
    setEditRowId(row.id);
    setEditFormData({
      id: row.id,
      number: row.number,
      item: row.item,
      paid: row.paid,
      balance: row.balance,
      created: row.created,
    });
  };

  const handleEditFormChange = (event) => {
    const { name, value } = event.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = () => {
    const editedRows = rows.map((row) =>
      row.id === editRowId ? { ...row, ...editFormData } : row
    );
    setRows(editedRows);
    setEditRowId(null);
  };

  return (
    <TableContainer component={Paper} sx={{ mr: "20px", width: "auto" }}>
      <Box
        display="flex"
        justifyContent="space-between"
        marginTop="20px"
        alignItems="center"
      >
        <Header title="Invoices" />
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell>Number</StyledTableCell>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell>Paid</StyledTableCell>
            <StyledTableCell>Balance</StyledTableCell>
            <StyledTableCell>Created</StyledTableCell>
            <StyledTableCell>Date</StyledTableCell>
            <StyledTableCell>Quick Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell>{row.id}</StyledTableCell>
              <StyledTableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="number"
                    value={editFormData.number}
                    onChange={handleEditFormChange}
                  />
                ) : (
                  row.number
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="item"
                    value={editFormData.item}
                    onChange={handleEditFormChange}
                  />
                ) : (
                  row.item
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="paid"
                    value={editFormData.paid}
                    onChange={handleEditFormChange}
                  />
                ) : (
                  row.paid
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="balance"
                    value={editFormData.balance}
                    onChange={handleEditFormChange}
                  />
                ) : (
                  row.balance
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editRowId === row.id ? (
                  <TextField
                    name="created"
                    value={editFormData.created}
                    onChange={handleEditFormChange}
                  />
                ) : (
                  row.created
                )}
              </StyledTableCell>
              <StyledTableCell>
                {editRowId === row.id ? (
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleSaveClick}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleEditClick(row)}
                  >
                    Edit
                  </Button>
                )}

                {
                  <Button style={{ position: "relative" }}>
                    {<DeleteModal />}
                  </Button>
                }
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Invoices;

