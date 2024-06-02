import { Box,Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { mockDataInvoices } from "../../data/mockData";

import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Header from "../../components/Header";

import BarGraph from "../../components/charts/BarGraph";
import BarGraph2 from "../../components/charts/BarGraph2";
import PieChart from "../../components/charts/PieChart";

import MetricCards from "../../components/MetricCards";
import LibraryAddIcon from "@mui/icons-material/LibraryAdd";
import EuroIcon from "@mui/icons-material/Euro";
import SavingsIcon from "@mui/icons-material/Savings";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px" height={200}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD OVERVIEW" />
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        <Box
          gridColumn="span 3"
          backgroundColor="#DDE0D7"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MetricCards
            title="2.9k"
            subtitle="Total Collections"
            progress="0.75"
            increase="+14%"
            icon={
              <LibraryAddIcon sx={{ color: " #DE4C8A", fontSize: "26px" }} />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#DDE0D7"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MetricCards
            title="$31,225"
            subtitle="Total Revenue"
            progress="0.50"
            increase="+21%"
            icon={<EuroIcon sx={{ color: "#DE4C8A", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#DDE0D7"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MetricCards
            title="441"
            subtitle="Bounced Cheques"
            progress="0.30"
            icon={<SavingsIcon sx={{ color: "#DE4C8A", fontSize: "26px" }} />}
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor="#DDE0D7"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <MetricCards
            title="1,325,134"
            subtitle="Sign Ups"
            progress="0.80"
            decrease="-18%"
            icon={<PersonAddIcon sx={{ color: "#DE4C8A", fontSize: "26px" }} />}
          />
        </Box>

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
            <BarGraph isDashboard={true} />
          </Box>
        </Box>

        <Box
          gridColumn="span 6"
          gridRow="span 4"
          backgroundColor={colors.primary[400]}
        >
          <Box  m="10px 0 0 0">
          <Typography color="grey" marginLeft="30px" variant="h5" fontWeight="600">
              Target Visualization{" "}
            </Typography>
            <PieChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 6"
          gridRow="span 4"
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
          {mockDataInvoices.map((invoice, i) => (
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
                  {invoice.name}
                </Typography>
              </Box>
              <Box color={colors.grey[100]}>{invoice.date}</Box>
              <Box
                backgroundColor="#98A562"
                p="5px 10px"
                borderRadius="4px"
              >
                ${invoice.cost}
              </Box>
            </Box>
          ))}
        </Box>

       
      </Box>
    </Box>
  );
};

export default Dashboard;
