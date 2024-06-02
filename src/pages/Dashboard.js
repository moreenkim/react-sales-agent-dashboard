import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import Header from "../components/Header";
import BarGraph from "../components/charts/BarGraph";
import BarGraph2 from "../components/charts/BarGraph2";
import PieChart from "../components/charts/PieChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [rows, setRows] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/invoices")
      .then((res) => setRows(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <Box m="20px" height={200}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
          p="30px"
        >
          <Typography variant="h5" fontWeight="600">
            Collections
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <BarGraph2 />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 3"
          backgroundColor={colors.primary[400]}
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Total Revenue
          </Typography>
          <Box height="250px" mt="20px">
            <BarGraph />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
        >
          <Box m="10px 0 0 0">
            <Typography
              color="grey"
              marginLeft="30px"
              marginTop="20px"
              variant="h5"
              fontWeight="600"
              marginBottom="30px"
            >
              Target Visualization{" "}
            </Typography>
            <PieChart />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 5"
          backgroundColor={colors.primary[400]}
          overflow="auto"
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
              Upcoming Invoices{" "}
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            borderBottom={`4px solid ${colors.primary[500]}`}
            colors={colors.grey[100]}
            p="15px"
          >
            <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead >
          <tr>
            <th style={{  paddingRight: "8px" }}>InvNumber</th>
            <th style={{  padding: "8px" }}>Item</th>
            <th style={{ padding: "8px" }}>Paid On</th>
            <th style={{ paddingLeft: "8px" }}>Balances</th>

          </tr>
        </thead>
            </table>
     
          </Box>
          {rows.map((invoice, i) => (
            <Box
              key={`${invoice.id}-${i}`}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderBottom={`4px solid ${colors.primary[500]}`}
              p="15px"
            >
              <Box>
                <Typography color={colors.grey[100]}>
                  {invoice.number}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>
                {invoice.item}
              </Box>
              <Box color={colors.grey[100]}>
              {invoice.paid}
              </Box>
              <Box backgroundColor="#98A562" p="5px 10px" borderRadius="4px">
                ${invoice.balance}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
