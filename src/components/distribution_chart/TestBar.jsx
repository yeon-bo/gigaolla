import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import styled from 'styled-components'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

// LABEL
const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, '100  (점)']

// 컴포.
const TestBar = ({ Name, color }) => {
  // 그래프 옵션
  const options = {
    responsive: false,
    plugins: false,

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
    barPercentage: 0.7,
  }

  // 그래프 데이터
  const data = {
    labels,
    datasets: [
      {
        label: Name,
        data: [1, 2, 3, 4, 5, 20].map((item) => item),
        backgroundColor: color,
      },
    ],
  }
  return <Bar options={options} data={data} style={{ height: '20em', width: '22em' }} />
}

export default TestBar
