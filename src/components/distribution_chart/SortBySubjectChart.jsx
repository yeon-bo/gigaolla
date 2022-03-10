import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

// OPTION
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
      align: 'end',
      labels: {
        padding: 10,
        usePointStyle: true,
        font: {
          size: 15,
          padding: 10,
        },
      },
    },
    tooltop: {
      backgroundColor: '#5D5FEF',
    },
  },
  scales: {
    x: {
      scaleLabel: {
        display: true,
      },
      grid: {
        display: false,
        drawBorder: false,
      },
    },
    y: {
      grid: {
        display: false,
        drawBorder: false,
      },
    },
  },
}

// LABEL
const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, '100 (점)']

const SortBySubjectChart = ({ subjects }) => {
  return (
    <Bar
      data={{
        labels,
        datasets: {
          label: subjects,
          data: [1, 2, 3, 4].map((item) => item.COUNT),
          borderColor: '#FBA869',
          backgroundColor: '#FBA869',
          pointBorderWidth: 4,
        },
      }}
      options={options}
    />
  )
}

export default SortBySubjectChart
