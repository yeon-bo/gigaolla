import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartTab from "./ChartTab";
import { useParams } from "react-router-dom";
import qs from "qs";

const Cont = styled.div`
  width: 800px;
  margin-top: 64px;
`;
const CurrentTotalData = styled.div`
  width: 81px;
  height: 39px;
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  line-height: 39px;
  letter-spacing: 0.977564px;
  text-align: center;
  .current {
    background: #5d5fef;
    border-radius: 12px;
  }
  .prev {
    background: #8898aa;
    border-radius: 12px;
  }
`;
const SubjectData = styled.div`
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: #696969;
`;

const TOTAL_URL =
  "https://kimcodi.kr/external_api/dashboard/avgOfSeriesByMonth.php";
const SUBJECT_URL = `https://kimcodi.kr/external_api/dashboard/avgOfSubjectByMonth.php`;
const subjects = {
  경찰: ["경찰학", "형사법", "헌법"],
  행정: ["행정학", "국어", "한국사", "행정법", "영어"],
  소방: ["소방학개론", "소방한국사", "소방영어", "소방관계법규", "소방행정법"],
};

ChartJS.register(BarElement);

// 전달, 전년도 구하기
function getPrevMonthAndYear() {
  let prevMonth = String(new Date().getMonth() - 2).padStart(2, "0");
  let prevYear = new Date().getFullYear();
  if ((prevMonth = "00")) {
    prevMonth = "12";
    prevYear -= 1;
  } else if ((prevMonth = "0-1")) {
    prevMonth = "11";
    prevYear -= 1;
  }
  return { prevMonth, prevYear };
}

// 이번 달, 이번 년도 구하기
const year = new Date().getFullYear(); // 현재 년도
const month = String(new Date().getMonth() - 1).padStart(2, "0"); // 현재 월

function AverageChart() {
  const [chartView, setChartView] = useState("bar");
  const [currentTotalData, setCurrentTotalData] = useState([]);
  const [currentSubjectdata, setCurrentSubjectData] = useState([]);
  const [prevTotalData, setPrevTotalData] = useState([]);
  const [prevSubjectdata, setPrevSubjectData] = useState([]);

  const params = useParams();
  const SUBJECT = params.subject;
  const subject = subjects[SUBJECT];

  // 이번달 총점 평균
  useEffect(() => {
    const currentTotal = [];
    (async () => {
      const res = await fetch(
        `${TOTAL_URL}?${qs.stringify({
          yyyy: year,
          mm: month,
          series: SUBJECT,
        })}`
      );
      currentTotal.push(Math.round((await res.json()).result[0].AVG));
      setCurrentTotalData(currentTotal);
    })().catch(console.error);
  }, []);

  // 이번달 과목별 평균
  useEffect(() => {
    (async () => {
      const currentSubject = await Promise.all(
        subject.map(async (i) => {
          const res = await fetch(
            `${SUBJECT_URL}?${qs.stringify({
              yyyy: year,
              mm: month,
              subject: i,
            })}`
          );
          return Math.round((await res.json()).result[0].AVG);
        })
      );
      setCurrentSubjectData(currentSubject);
    })().catch(console.error);
  }, []);

  // 전달 총점 평균
  useEffect(() => {
    const prevTotal = [];
    (async () => {
      const res = await fetch(
        `${TOTAL_URL}?${qs.stringify({
          yyyy: getPrevMonthAndYear().prevYear,
          mm: getPrevMonthAndYear().prevMonth,
          series: SUBJECT,
        })}`
      );
      prevTotal.push(Math.round((await res.json()).result[0].AVG));
      setPrevTotalData(prevTotal);
    })().catch(console.error);
  }, []);

  // 전달 과목별 평균
  useEffect(() => {
    (async () => {
      const prevSubject = await Promise.all(
        subject.map(async (i) => {
          const res = await fetch(
            `${SUBJECT_URL}?${qs.stringify({
              yyyy: getPrevMonthAndYear().prevYear,
              mm: getPrevMonthAndYear().prevMonth,
              subject: i,
            })}`
          );
          return Math.round((await res.json()).result[0].AVG);
        })
      );
      setPrevSubjectData(prevSubject);
    })().catch(console.error);
  }, []);

  const barOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: true,
        maxWidth: "200px",
        position: "bottom",
        align: "end",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
    },
    scales: {
      xAxes: {
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      yAxes: {
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 20,
          },
        },
      },
    },
  };

  const chartData = {
    labels: ["총점", "경찰학", "형사법", "헌법"],
    datasets: [
      {
        label: "이번달",
        data: [
          currentTotalData,
          currentSubjectdata[0],
          currentSubjectdata[1],
          currentSubjectdata[2],
        ],
        backgroundColor: ["#5E72E4"],
        barPercentage: 0.5,
      },
      {
        label: "전달",
        data: [
          prevTotalData,
          prevSubjectdata[0],
          prevSubjectdata[1],
          prevSubjectdata[2],
        ],
        backgroundColor: "#8898AA",
        barPercentage: 0.5,
      },
    ],
  };

  return (
    <>
      <ChartTab onClick={setChartView} />
      <Cont>
        {chartView === "bar" ? (
          <>
            <Bar options={barOptions} data={chartData} />
            <CurrentTotalData>
              <div className="current">{currentTotalData}점</div>
              <div className="prev">{prevTotalData}점</div>
            </CurrentTotalData>
            <div>
              {currentSubjectdata.map((data) => {
                let datas = <SubjectData>{data}</SubjectData>;
                return datas;
              })}
            </div>
          </>
        ) : (
          <Line options={barOptions} data={chartData} />
        )}
      </Cont>
    </>
  );
}

export default AverageChart;
