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
        data: [605.5, 605, 432.8, 533.2, 643.4, 543.6, 653.3, 653.5, 653.5, 653.5, 343.5, 543.5, 433.5, 443.5, 553.5, 443.5, 643.5, 543.5, 323.5, 433.5, 433.5, 343.5],
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
        ticks: {
          color: 'white',
          callback: (value) => `${value}`,
        },
        grid: { color: '#444' },
      },
    },
  };

  return (
    <div style={{ width: '1000px', backgroundColor: '#1e1e1e', padding: '20px', borderRadius: '12px' }}>
  <Bar data={data} options={options} />
</div>

  );
};

export default DeFiStackedBarChart;
