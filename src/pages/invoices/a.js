
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,styled,tableCellClasses, Box
} from '@mui/material';
import { mockDataInvoices } from '../../data/mockData';
 import axios from "axios";
 import Header from "../../components/Header";
 import { StyledTableCell, StyledTableRow } from "../../components/tableStyle";
import {UpdateModal, DeleteModal} from '../../components/modal/UpdateModal'

const Invoices = () => {
  const [data, setData] = useState([]);
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [rows, setRows] = useState([]);
  const [editRowId, setEditRowId] = useState(null);





  useEffect(() => {
    axios
      .get("http://localhost:8000/invoices")
      .then(res => setRows(res.data))
      .catch((err) => {console.log(err)});
  }, []);


  const handleEditClick = (id) => {
    setSelectedItemId(id);
    setIsModalVisible(true);
};

const handleCloseModal = () => {
    setIsModalVisible(false);
    setSelectedItemId(null);
};

  return (
    <TableContainer component={Paper} sx={{ mr: '20px', width: 'auto' }}>
         <Box display="flex" justifyContent="space-between" marginTop="20px" alignItems="center">
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
            <StyledTableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <StyledTableCell component="th" scope="row">
                {row.number}
              </StyledTableCell>
              <StyledTableCell align="right">{row.item}</StyledTableCell>
              <StyledTableCell align="right">{row.paid}</StyledTableCell>
              <StyledTableCell align="right">{row.balance}</StyledTableCell>
              <StyledTableCell align="right">{row.created}</StyledTableCell>
              <StyledTableCell align="right">{row.date}</StyledTableCell>
              <StyledTableCell align="right">
                {<div style={{marginBottom: "5px"}}>
                  {<UpdateModal/>}
                  {/* edit */}
                  </div>}
                {<div style={{position:"relative"}}>{<DeleteModal/>}</div>}

                </StyledTableCell>

            </StyledTableRow>
          ))}    
          
              </TableBody>

   
      </Table>
    </TableContainer>
  );
};


export default Invoices;






























// import { Box, useTheme, Button } from "@mui/material";
// import { DataGrid } from "@mui/x-data-grid";
// import { tokens } from "../../theme";
// import { mockDataInvoices } from "../../data/mockData";
// import Header from "../../components/Header";


// // const onButtonClick = (e, row) => {
// //   e.stopPropagation();
// //   do whatever you want with the row
// //   edit invoice
// // };
// const Invoices = () => {
  
// };

// export default Invoices;



// const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const columns = [
  //   { field: "id", headerName: "ID" },
  //   {
  //     field: "name",
  //     headerName: "Name",
  //     flex: 1,
  //     cellClassName: "name-column--cell",
  //   },
  //   {
  //     field: "phone",
  //     headerName: "Phone Number",
  //     flex: 1,
  //   },
  //   {
  //     field: "email",
  //     headerName: "Email",
  //     flex: 1,
  //   },
  //   {
  //     field: "date",
  //     headerName: "Date",
  //     flex: 1,
  //   },
  //   {
  //     field: "cost",
  //     headerName: "Cost",
  //     flex: 1,
  //     renderCell: (params) => {
  //       return (
  //         <Button
  //           onClick={(e) => onButtonClick(e, params.row)}
  //           variant="contained"
  //         >
  //           Edit
  //         </Button>
  //       );
  //     },
  //   },

  // ];

  // return (
  //   <Box m="20px">
  //     <Header title="INVOICES" subtitle="List of Invoice Balances" />
  //     <Box
  //       m="40px 0 0 0"
  //       height="75vh"
  //       sx={{
  //         "& .MuiDataGrid-root": {
  //           border: "none",
  //         },
  //         "& .MuiDataGrid-cell": {
  //           borderBottom: "none",
  //         },
  //         "& .name-column--cell": {
  //           color: colors.greenAccent[300],
  //         },
  //         "& .MuiDataGrid-columnHeaders": {
  //           backgroundColor: colors.blueAccent[700],
  //           borderBottom: "none",
  //         },
  //         "& .MuiDataGrid-virtualScroller": {
  //           backgroundColor: colors.primary[400],
  //         },
  //         "& .MuiDataGrid-footerContainer": {
  //           borderTop: "none",
  //           backgroundColor: colors.blueAccent[700],
  //         },
  //         "& .MuiCheckbox-root": {
  //           color: `${colors.greenAccent[200]} !important`,
  //         },
  //       }}
  //     >
  //       <Button>edit</Button>
  //       <DataGrid rows={mockDataInvoices} columns={columns} />
  //     </Box>
  //   </Box>
  // );