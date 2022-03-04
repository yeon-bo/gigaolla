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
import { getLastMonth } from '../utils/getLastMonth'

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
// const subjects = {
//   // 각 과별로 가지고 있는 과목의 종류를 보관하는 전역 변수입니다.
//   경찰: ['경찰학', '형사법', '헌법'],
// }

//컴포..
const DistributionChart = () => {
  const params = useParams()

  const SERIES = params.subject
  const CLASS = params.number
  // const subject = subjects[SERIES] // 해당하는 과의 과목 목록을 가져옵니다.

  const { thisYear, lastMonth } = getLastMonth()
  console.log(thisYear, lastMonth)

  const [policeSubjectData, setPoliceSubjectData] = useState([])
  const [criminalSubjectData, setCriminalSubjectData] = useState([])
  const [lawSubjectData, setLawSubjectData] = useState([])

  const [data, setData] = useState(null)

  useEffect(() => {
    ;(async () => {
      if (!params.number) {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&subject=경찰학`
        )
        const { result } = await response.json()
        setPoliceSubjectData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&subject=경찰학&class=${SERIES}&classn=${CLASS}`
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
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&subject=형사법`
        )
        const { result } = await response.json()
        setCriminalSubjectData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&subject=형사법&class=${SERIES}&classn=${CLASS}`
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
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&subject=헌법`
        )
        const { result } = await response.json()
        setLawSubjectData(result)
      } else {
        const response = await fetch(
          `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?yyyy=${thisYear}&mm=${lastMonth}&subject=헌법&class=${SERIES}&classn=${CLASS}`
        )
        const { result } = await response.json()
        setLawSubjectData(result)
      }
    })()
  }, [])
  // useEffect(() => {
  //   ;(async () => {
  //     const newData = {} // { [과목명]: 점수 정보 } 를 가지고 있는 임시 변수. 서버에서 가져온 내용을 잠시 보관합니다.
  //     await Promise.all(
  //       subject.map(async (i) => {
  //         // 과목 정보마다 루프를 돕니다.
  //         const response = await fetch(
  //           `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?${qs.stringify(
  //             {
  //               yyyy: thisYear,
  //               mm: lastMonth,
  //               subject: i, // 각 과목
  //               ...(params.number ? { class: SERIES, classn: CLASS } : null),
  //             }
  //           )}`
  //         )
  //         newData[i] = (await response.json()).result // newData.과목명에 정보를 저장합니다.
  //       })
  //     )
  //     setData(newData) // 과목명을 모두 불러오면 state를 바꿉니다.
  //   })().catch(console.error)
  // })
  // useEffect(() => {
  //   ;(async () => {
  //     const response = await fetch(
  //       `https://kimcodi.kr/external_api/dashboard/distributionOfStudentScoreByMonth.php?${qs.stringify(
  //         {
  //           yyyy: thisYear,
  //           mm: lastMonth,
  //           subject: '헌법',
  //           ...(params.number ? { class: SERIES, classn: CLASS } : null),
  //         }
  //       )}`
  //     )
  //     const { result } = await response.json()
  //     setLawSubjectData(result)
  //   })()
  // }, [])

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
