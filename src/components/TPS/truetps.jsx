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
        data: [5.5, 5, 2.8, 3.2, 3.4, 3.6, 3.3, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5],
        backgroundColor: '#A2DFF7',
      },
      {
        label: 'Protocol B',
        data: [1.2, 1.0, 0.9, 1.0, 1.3, 2.1, 3.8, 10, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1, 2.1,],
        backgroundColor: '#61C47A',
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
        ticks: {
          color: 'white',
          callback: (value) => `${value}B`,
        },
        grid: { color: '#444' },
      },
    },
  };

  return (
    <div style={{ width: '1400px', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px' }}>
  <Bar data={data} options={options} />
</div>

  );
};

export default DeFiStackedBarChart;
