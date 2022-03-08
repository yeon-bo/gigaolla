import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import ChartTab from "./ChartTab";

const totalUrl = `https://kimcodi.kr/external_api/dashboard/avgOfSeriesByMonth.php?%20yyyy=2021&mm=12&series=경찰`;
const subjectUrl = `https://kimcodi.kr/external_api/dashboard/avgOfSubjectByMonth.php?yyyy=2021&mm=12&subject=헌법`;

function AverageChart() {
  const [averageData, setAverageData] = useState([]);
  const [chartView, setChartView] = useState("bar");

  function searchApi() {
    let arr = [];
    axios
      .all([axios.get(totalUrl), axios.get(subjectUrl)])
      .then(
        axios.spread((res1, res2) => {
          console.log(
            "성공",
            res1.data.result[0].STUDENT_COUNT,
            res2.data.result[0].STUDENT_COUNT
          );
          console.log(averageData);
        })
      )
      .catch(function (error) {
        console.log("실패");
      });
  }
  searchApi();

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
        data: [96, 90, 95, 90],
        backgroundColor: ["#5E72E4"],
        barPercentage: 0.5,
      },
      {
        label: "전달",
        data: [89, 87, 90, 85],
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

export default AverageChart;
