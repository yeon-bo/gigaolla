import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { Chart as ChartJS, BarElement } from "chart.js";
import { Bar } from "react-chartjs-2";

let nowMonth = new Date().getMonth() - 1;
let prevMonth = new Date().getMonth() - 2;

function makeNowMonth() {
  if (nowMonth < 9) {
    nowMonth = `0${nowMonth}`;
  }
}

function makePreMonth() {
  if (prevMonth < 9) {
    prevMonth = `0${prevMonth}`;
  }
}

makeNowMonth();
makePreMonth();
console.log(nowMonth);

function searchApi() {
  const currentUrl = `https://kimcodi.kr/external_api/dashboard/avgOfSeriesByMonth.php?%20yyyy=2021&mm=12&series=경찰`;
  const subjectUrl = `https://kimcodi.kr/external_api/dashboard/avgOfSubjectByMonth.php?yyyy=2021&mm=12&subject=경찰학`;

  axios
    .all([axios.get(currentUrl), axios.get(subjectUrl)])
    .then(
      axios.spread((res1, res2) => {
        // setAverageData(array);
        console.log(
          "성공",
          res1.data.result[0].STUDENT_COUNT,
          res2.data.result[0].STUDENT_COUNT
        );
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
      data: [90, 80, 90, 88],
      backgroundColor: ["#5E72E4"],
      barPercentage: 0.5,
    },
    {
      label: "전달",
      data: [99, 87, 79, 78],
      backgroundColor: "#8898AA",
      barPercentage: 0.5,
    },
  ],
};

function AverageCart() {
  const Cont = styled.div`
    width: 800px;
    margin-top: 64px;
  `;

  return (
    <Cont>
      <Bar options={barOptions} data={chartData} />
    </Cont>
  );
}

export default AverageCart;
