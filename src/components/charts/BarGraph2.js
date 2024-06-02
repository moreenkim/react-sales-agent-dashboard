
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
  
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  function BarChart2(){
  
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
              backgroundColor: '#790667',
            },
            {
              label: 'Secondary',
              data: labels.map(() => { return Math.random() * 1000 + 500 }),
              backgroundColor: '#8691A8',
            },
            {
              label: 'IGCSE',
              data: labels.map(() => { return Math.random() * 1000 + 500 }),
              backgroundColor: '#02A7AE',
            },
            {
                label: 'Kindergarten',
                data: labels.map(() => { return Math.random() * 1000 + 500 }),
                backgroundColor: '#F89FBD',
              },
          ],
        };
  
      return(
              <Bar options={options} data={data} />
  
      )
  }
  
  
  export default BarChart2