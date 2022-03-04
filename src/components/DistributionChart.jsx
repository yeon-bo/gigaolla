import axios from 'axios'
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
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useParams } from 'react-router-dom'

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

//컴포..
const DistributionChart = () => {
  const params = useParams()
  const SERIES = params.subject
  const CLASS = params.number

  const [policeSubjectData, setPoliceSubjectData] = useState([])
  const [criminalSubjectData, setCriminalSubjectData] = useState([])
  const [lawSubjectData, setLawSubjectData] = useState([])
  useEffect(() => {
    ;(async () => {
      if (!params.number) {
        const response = await fetch(
          'https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학'
        )
        const { result } = await response.json()
        setPoliceSubjectData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=경찰학&class=${SERIES}&classn=${CLASS}`
        )
        const { result } = await response.json()
        setPoliceSubjectData(result)
      }
    })()
  }, [])
  useEffect(() => {
    ;(async () => {
      if (!params.number) {
        const response = await fetch(
          'https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=형사법'
        )
        const { result } = await response.json()
        setCriminalSubjectData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=형사법&class=${SERIES}&classn=${CLASS}`
        )
        const { result } = await response.json()
        setCriminalSubjectData(result)
      }
    })()
  }, [])
  useEffect(() => {
    ;(async () => {
      if (!params.number) {
        const response = await fetch(
          'https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=헌법'
        )
        const { result } = await response.json()
        setLawSubjectData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=2021&mm=12&subject=헌법&class=${SERIES}&classn=${CLASS}`
        )
        const { result } = await response.json()
        setLawSubjectData(result)
      }
    })()
  }, [])

  //리턴..
  return (
    <Line
      data={{
        labels,
        datasets: [
          {
            label: '경찰학',
            data: policeSubjectData.map((item) => item.COUNT),
            borderColor: '#FBA869',
            backgroundColor: '#FBA869',
            pointBorderWidth: 4,
          },
          {
            label: '형사법',
            data: criminalSubjectData.map((item) => item.COUNT),
            borderColor: '#42C366',
            backgroundColor: '#42C366',
            pointBorderWidth: 4,
          },
          {
            label: '헌법',
            data: lawSubjectData.map((item) => item.COUNT),
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

export default DistributionChart
