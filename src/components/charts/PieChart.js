import {
  Chart as ChartJS,
  Filler,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";
//   import TitleCard from '../../../components/Cards/TitleCard';
//   import Subtitle from '../../../components/Typography/Subtitle';
import { Typography, Box } from "@mui/material";
// import Pie from '../../pages/piechart'

ChartJS.register(ArcElement, Tooltip, Legend, Tooltip, Filler, Legend);

function PieChart() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
  };

  const labels = ["Zeraki Analytics", "Zeraki Finance", "Zeraki Timetable"];

  const data = {
    labels,
    datasets: [
      {
        label: "# of Orders",
        data: [30, 51, 82],
        backgroundColor: [
          "rgba(255, 99, 255, 0.8)",
          "rgba(54, 162, 235, 0.8)",
          "rgba(255, 206, 255, 0.8)",
        ],
        borderColor: [
          "rgba(255, 99, 255, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <Box>
      <Pie options={options} data={data} />
    </Box>
  );
}

export default PieChart;
