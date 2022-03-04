import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import DatePicker from "react-datepicker";
import reset from "../image/reset.svg";
import calendar from "../image/calendar.svg";
import { useParams } from "react-router";

const AttendChart = () => {
  const [chartView, setChartView] = useState("bar");
  const [startDate, setStartDate] = useState(new Date());
  const [totalStudentArr, setTotalStudentArr] = useState([]);
  const [testedStudentArr, setTestedStudentArr] = useState([]);
  const { subject, number } = useParams();

  const Cont = styled.div`
    width: 90%;
    height: 23em;
    margin: 3em auto;
    canvas {
      max-height: 100% !important;
    }
  `;
  const Tab = styled.div`
    display: flex;
    justify-content: flex-end;
    button {
      cursor: pointer;
      padding: 10px 20px;
      margin-left: 10px;
      background: #f4f4f4;
      border-radius: 8px;
      border: none;
    }
    .reset {
      margin-right: 15px;
    }
    .calendarcontainer {
      position: relative;
      .datepicker {
        cursor: pointer;
        width: 165px;
        padding: 11px 15px 10px 48px;
        box-sizing: border-box;
        background: #f4f4f4;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
        &:focus {
          outline: none;
        }
      }
      img {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 17px;
      }
    }
  `;

  const getYearMonth = () => {
    const date = new Date();
    const nowYear = date.getFullYear();
    const nowMonth = date.getMonth() + 1;
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let YearMonth = [];
    for (let i = 0; i <= 5; i++) {
      YearMonth.unshift({ year, month });
      month--;
      if (month === 0) {
        month = 12;
        year = year - 1;
      }
    }
    return { nowYear, nowMonth, YearMonth };
  };

  const getStudentData = async (
    subject,
    number,
    year = getYearMonth().nowYear,
    month = getYearMonth().nowMonth
  ) => {
    month = month < 10 ? `0${month}` : month;
    let totalStudent = 0;
    let testedStudent = 0;

    const BASE_URL = "https://kimcodi.kr/external_api/dashboard/";
    const SUC_CODE = "001";

    const totalUrl =
      number === undefined
        ? `${BASE_URL}numberOfTotalStudentsByMonth.php?yyyy=${year}&mm=${month}&class=${subject}`
        : `${BASE_URL}numberOfTotalStudentsByMonth.php?yyyy=${year}&mm=${month}&class=${subject}&classn=${number}`;
    const testedUrl =
      number === undefined
        ? `${BASE_URL}numberOfTestedStudentsByMonth.php?yyyy=${year}&mm=${month}&class=${subject}`
        : `${BASE_URL}numberOfTestedStudentsByMonth.php?yyyy=${year}&mm=${month}&class=${subject}&classn=${number}`;

    await axios.get(totalUrl).then((res) => {
      if (res.data.code === SUC_CODE) {
        totalStudent = res.data.result[0].STUDENT_COUNT;
      } else {
        return;
      }
    });

    await axios.get(testedUrl).then((res) => {
      if (res.data.code === SUC_CODE) {
        testedStudent = res.data.result[0].STUDENT_COUNT;
      } else {
        return;
      }
    });

    // 응시율
    let attendPercent = ((testedStudent / totalStudent) * 100).toFixed(1);
    attendPercent = attendPercent === "NaN" ? 0 : attendPercent;

    return { totalStudent, testedStudent, attendPercent };
  };

  const { YearMonth } = getYearMonth();
  const labels = YearMonth.map((label) =>
    label.month < 10 ? `0${label.month}` : label.month
  );

  useEffect(() => {
    const fetchData = async () => {
      const { totalStudentData, testedStudentData, attendPercentData } =
        await YearMonth.reduce(
          async (_acc, cur) => {
            const { totalStudent, testedStudent, attendPercent } =
              await getStudentData(subject, number, cur.year, cur.month);
            const acc = await _acc;
            acc["totalStudentData"].push(totalStudent);
            acc["testedStudentData"].push(testedStudent);
            acc["attendPercentData"].push(attendPercent);
            return acc;
          },
          { totalStudentData: [], testedStudentData: [], attendPercentData: [] }
        );
      setTotalStudentArr(totalStudentData);
      setTestedStudentArr(testedStudentData);
      return;
    };

    fetchData();
  }, [subject, number]);

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
  );

  const barOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },
      tooltip: {
        backgroundColor: "#5D5FEF",
        xAlign: "center",
        yAlign: "bottom",
      },
    },
    scales: {
      xAxes: {
        grid: {
          display: false,
        },
      },
      yAxes: {
        grid: {
          borderDash: [10],
          borderColor: "#C7C7C7",
          drawBorder: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };

  const chartData = {
    labels,
    datasets: [
      {
        label: "재학생",
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        data: totalStudentArr,
        backgroundColor: "#8898AA",
        borderColor: "#8898AA",
      },
      {
        label: "응시생",
        barPercentage: 0.6,
        categoryPercentage: 0.5,
        data: testedStudentArr,
        backgroundColor: "#5D5FEF",
        borderColor: "#5D5FEF",
      },
    ],
  };

  return (
    <Cont>
      <Tab>
        <button className="reset">
          <img src={reset} alt="reset" />
        </button>
        <div className="calendarcontainer">
          <img src={calendar} alt="calendar" className="navicon" />
          <DatePicker
            className="datepicker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>
        <button onClick={() => setChartView("bar")}>비교</button>
        <button onClick={() => setChartView("chart")}>추이</button>
      </Tab>
      {chartView === "bar" ? (
        <Bar options={barOptions} data={chartData} />
      ) : (
        <Line options={barOptions} data={chartData} />
      )}
    </Cont>
  );
};

export default AttendChart;
