import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartTab from "./ChartTab";
import { useParams } from "react-router-dom";
import qs from "qs";

const TOTAL_URL =
  "https://kimcodi.kr/external_api/dashboard/avgOfSeriesByMonth.php";
const SUBJECT_URL = `https://kimcodi.kr/external_api/dashboard/avgOfSubjectByMonth.php`;
const subjects = {
  경찰: ["경찰학", "형사법", "헌법"],
  행정: ["행정학", "국어", "한국사", "행정법", "영어"],
  소방: ["소방학개론", "소방한국사", "소방영어", "소방관계법규", "소방행정법"],
};

function Chart() {
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
          yyyy: new Date().getFullYear(),
          mm: `0${new Date().getMonth() - 1}`,
          series: SUBJECT,
        })}`
      );
      currentTotal.push(Math.round((await res.json()).result[0].AVG));
      setCurrentTotalData(currentTotal);
    })().catch(console.error);
  }, []);

  // 이번달 과목별 평균
  useEffect(() => {
    const currentSubject = [];
    (async () => {
      await Promise.all(
        subject.map(async (i) => {
          const res = await fetch(
            `${SUBJECT_URL}?${qs.stringify({
              yyyy: new Date().getFullYear(),
              mm: `0${new Date().getMonth() - 1}`,
              subject: i,
            })}`
          );
          currentSubject.push(Math.round((await res.json()).result[0].AVG));
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
          yyyy: new Date().getFullYear(),
          mm: `0${new Date().getMonth() - 1}`,
          series: SUBJECT,
        })}`
      );
      prevTotal.push(Math.round((await res.json()).result[0].AVG));
      setPrevTotalData(prevTotal);
    })().catch(console.error);
  }, []);

  // 전달 과목별 평균
  useEffect(() => {
    const prevSubject = [];
    (async () => {
      await Promise.all(
        subject.map(async (i) => {
          const res = await fetch(
            `${SUBJECT_URL}?${qs.stringify({
              yyyy: new Date().getFullYear(),
              mm: `0${new Date().getMonth() - 1}`,
              subject: i,
            })}`
          );
          prevSubject.push(Math.round((await res.json()).result[0].AVG));
        })
      );
      setPrevSubjectData(prevSubject);
    })().catch(console.error);
  }, []);

  // 차트
  ChartJS.register(BarElement);

  const barOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        display: true,
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

  const Cont = styled.div`
    width: 800px;
    margin-top: 64px;
  `;

  return (
    <>
      <ChartTab onClick={setChartView} />
      <Cont>
        {chartView === "bar" ? (
          <Bar options={barOptions} data={chartData} />
        ) : (
          <Line options={barOptions} data={chartData} />
        )}
      </Cont>
    </>
  );
}

export default Chart;
