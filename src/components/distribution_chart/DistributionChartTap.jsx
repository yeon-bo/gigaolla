import styled from 'styled-components'

const Tab = styled.div`
  display: flex;
  justify-content: flex-end;
  /* padding-bottom: 50px; */
  button {
    cursor: pointer;
    padding: 10px 20px;
    margin-left: 10px;
    background: #f4f4f4;
    border-radius: 8px;
    border: none;

    &:hover {
      background-color: #5d5fef;
      color: #fff;
    }
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
`

const DistributionChartTab = ({ setDistributionTotal }) => {
  return (
    <Tab>
      {/* 원하시는 함수 props 로 내려서 쓰시면 됩니다. */}
      <button
        onClick={() => {
          setDistributionTotal(true)
        }}
      >
        전체
      </button>
      <button
        onClick={() => {
          setDistributionTotal(false)
        }}
      >
        과목별
      </button>
    </Tab>
  )
}

export default DistributionChartTab
