import { useState } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import reset from "../image/reset.svg";
import calendar from "../image/calendar.svg";

const ChartTab = ({ onClick }) => {
  const [startDate, setStartDate] = useState(new Date());
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
  return (
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
      {/* 원하시는 함수 props 로 내려서 쓰시면 됩니다. */}
      <button onClick={() => onClick("bar")}>비교</button>
      <button onClick={() => onClick("chart")}>추이</button>
    </Tab>
  );
};

export default ChartTab;
