import { Box } from '@mui/material';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
// import TitleCard from '../../../components/Cards/TitleCard';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function BarGraph(){

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          }
        },
      };
      
      const labels = ['Zeraki Analytics', 'Zeraki Finance', 'Zeraki Timetable'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Primary',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: '#BA99AF',
          },
          {
            label: 'Secondary',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: '#6433FF',
          },
          {
            label: 'IGCSE',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: '#D87FFC',
          },
          {
            label: 'Kindergarten',
            data: labels.map(() => { return Math.random() * 1000 + 500 }),
            backgroundColor: '#F1ED11',
          },
        ],
      };

    return(
      <Box>
            <Bar options={options} data={data} />
      </Box>

    )
}


export default BarGraph