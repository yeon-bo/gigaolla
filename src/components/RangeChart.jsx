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
import { Line } from 'react-chartjs-2'
import {
  getCriminalSubjectRangeData,
  getLawSubjectRangeData,
  getPoliceSubjectRangeData,
} from '../utils/api'
import { useQuery } from 'react-query'

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
          size: 18,
          padding: 10,
        },
      },
    },
    title: {
      text: 'Chart.js Line Chart',
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
      ticks: {
        callback: function (value, index, ticks) {
          return value + '명'
        },
      },
    },
  },
}

// LABEL
const labels = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

const RangeChart = ({ year, month }) => {
  const { isLoading: policeRangeLoading, data: policeRangeData } = useQuery(
    ['range', 'police'],
    () => getPoliceSubjectRangeData(year, month)
  )
  const { isLoading: criminalRangeLoading, data: criminalRangeData } = useQuery(
    ['range', 'criminal'],
    () => getCriminalSubjectRangeData(year, month)
  )
  const { isLoading: lawRangeLoading, data: lawRangeData } = useQuery(
    ['range', 'law'],
    () => getLawSubjectRangeData(year, month)
  )

  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: '경찰학',
            data: policeRangeData.map((item) => item.COUNT),
            borderColor: '#FBA869',
            backgroundColor: '#FBA869',
            pointBorderWidth: 4,
          },
          {
            label: '형사법',
            data: criminalRangeData.map((item) => item.COUNT),
            borderColor: '#42C366',
            backgroundColor: '#42C366',
            pointBorderWidth: 4,
          },
          {
            label: '헌법',
            data: lawRangeData.map((item) => item.COUNT),
            borderColor: '#70A6E8',
            backgroundColor: '#70A6E8',
            pointBorderWidth: 4,
          },
        ],
      }}
      options={options}
    />
  )
}

export default RangeChart
