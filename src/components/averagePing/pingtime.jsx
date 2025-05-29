// components/DeFiStackedBarChart.js
import React from 'react';
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

const DeFiStackedBarChart = () => {
  const data = {
    labels: ['22/05', '23/05', '24/05', '25/05', '26/05', '27/05', '28/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05', '29/05'],
    datasets: [
      {
        label: 'Protocol A',
      data: [305.5, 305, 332.8, 333.2, 343.4, 343.6, 353.3, 353.5, 353.5, 353.5, 343.5, 343.5, 333.5, 343.5, 353.5, 343.5, 343.5, 343.5, 323.5, 333.5, 333.5, 343.5],
        backgroundColor: '#A2DFF7',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: { color: 'white' },
      },
      title: {
        display: true,
        text: 'DeFi Dashboard',
        color: 'white',
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { color: 'white' },
        grid: { color: '#444' },
      },
      y: {
        stacked: true,
        min: 0,
        max: 100,
        ticks: {
          color: 'white',
          stepSize: 10,
          callback: (value) => `${value}`,
        },
        grid: { color: '#444' },
        
      },
    },
  };

  return (
    <div style={{ maxWidth: '1000px', height: '400px', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px' }}>
  <Bar data={data} options={options} />
</div>

  );
};

export default DeFiStackedBarChart;
