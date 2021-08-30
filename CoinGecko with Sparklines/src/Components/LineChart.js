import React from 'react';
import { Line } from 'react-chartjs-2';


const array=[1,19,17,15,18,16]

const line = {
  labels: ['1', '2', '3', '4', '5', '6'],
  datasets: [
    {
      data: array,
      fill: false,
      backgroundColor: 'blue',
      borderColor: 'rgba(255, 99, 132, 0.2)',
    },
  ],
};
const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};

const LineChart = () => (
  <>
    <div className='header'>
      
    </div>
    <Line data={line} options={options} />
  </>
);

export default LineChart;