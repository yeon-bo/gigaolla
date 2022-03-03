import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { Chart } from "chart.js";

let array = [];

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

function AxiosApi() {
  const [averageData, setAverageData] = useState([]);

  function searchApi() {
    const currentUrl = `https://kimcodi.kr/external_api/dashboard/avgOfSeriesByMonth.php?%20yyyy=2021&mm=12&series=경찰`;
    const subjectUrl = `https://kimcodi.kr/external_api/dashboard/avgOfSubjectByMonth.php?yyyy=2021&mm=12&subject=경찰학`;

    axios
      .all([axios.get(currentUrl), axios.get(subjectUrl)])
      .then(
        axios.spread((res1, res2) => {
          array = [
            res1.data.result[0].STUDENT_COUNT,
            res2.data.result[0].STUDENT_COUNT,
          ];
          // setAverageData(array);
          console.log(
            "성공",
            res1.data.result[0].STUDENT_COUNT,
            res2.data.result[0].STUDENT_COUNT
          );
          console.log(array);
        })
      )
      .catch(function (error) {
        console.log("실패");
      });
  }
  searchApi();

  const canvasDom = useRef(null);

  useEffect(() => {
    const ctx = canvasDom.current.getContext("2d");
    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: ["총점", "경찰학", "형사법", "헌법"],
        datasets: [
          {
            label: "currentData",
            data: [90, 80, 90, 88],
            backgroundColor: ["#5E72E4", "#FBA869", "#42C366", "#70A6E8"],
            barPercentage: 0.5,
          },
          {
            label: "prevData",
            data: [99, 87, 79, 78],
            backgroundColor: "#8898AA",
            barPercentage: 0.5,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              ticks: {
                suggestedMin: 0,
                suggestedMax: 100,
              },
            },
          ],
        },
      },
    });
  }, []);
  console.log(array);

  return (
    <div style={{ marginTop: 64 }}>
      <canvas ref={canvasDom}></canvas>
      {/* <div>{nowMonth}</div> */}
      {/* <div>array[0]</div> */}
      {/* <div>{prevMonth}</div> */}
    </div>
  );
}

export default AxiosApi;
