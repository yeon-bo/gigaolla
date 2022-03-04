import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// icon link
import logo from "../image/ollalogo.svg";
import menu from "../image/menu_gray.svg";
import menuColor from "../image/menu_color.svg";
import police from "../image/police_gray.svg";
import policeColor from "../image/police_color.svg";
import fire from "../image/fire_gray.svg";
import fireColor from "../image/fire_color.svg";
import admin from "../image/admin_gray.svg";
import adminColor from "../image/admin_color.svg";
import checklist from "../image/checklist_gray.svg";
import calendar from "../image/calendar.svg";
import logout from "../image/logout.svg";

// calender
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const StyledNavigation = styled.div`
  /* :root { 적용이 안됩니다..
    --main-color: #5d5fef;
    --police-color: #161aec;
    --fire-color: #fd4f3a;
    --admin-color: #257e0e;
  } */
  font-family: "Noto Sans KR", sans-serif;
  /* min-height: 100vh; */
  overflow-x: hidden;
  .container {
    position: relative;
    width: 100%;
  }
  .navgation {
    position: fixed;
    width: 286px;
    height: 100%;
    background: #5d5fef;
    border-left: 29px solid #5d5fef;
    overflow: hidden;
    font-weight: 500;
    font-size: 22px;
    .logo {
      width: 191px;
      height: 45px;
      margin: 62px 0 91px 33px;
    }
    ul {
      li {
        position: relative;
        width: 100%;
        list-style: none;
        .link {
          width: 286px;
          display: flex;
          text-decoration: none;
          color: #c7c7c7;
          &:hover {
            background: #fff;
            border-top-left-radius: 30px;
            border-bottom-left-radius: 30px;
          }
          .menutext {
            &:hover {
              color: #5d5fef;
            }
          }
          .menutext {
            &:active {
              color: #5d5fef;
            }
          }
          .policetext {
            &:hover {
              color: #161aec;
            }
          }
          .firetext {
            &:hover {
              color: #fd4f3a;
            }
          }
          .admintext {
            &:hover {
              color: #257e0e;
            }
          }
          &:hover span::before {
            content: "";
            position: absolute;
            right: -83px;
            top: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px 35px 0 10px #fff;
          }
          &:hover span::after {
            content: "";
            position: absolute;
            left: 153px;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px #fff;
          }

          img,
          .navicon {
            display: block;
            min-width: 26px;
            padding: 25px;
            height: 32px;
            :last-child {
              height: 28px;
            }
          }
          span {
            position: relative;
            display: block;
            padding: 0 3px;
            width: 40%;
            height: 80px;
            line-height: 80px;
            text-align: center;
          }
        }
        /* active */
        .activeBg {
          width: 100%;
          color: #5d5fef;
          background: #fff;
          border-top-left-radius: 30px;
          border-bottom-left-radius: 30px;
          span::before {
            content: "";
            position: absolute;
            right: -84px;
            top: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px 35px 0 10px #fff;
          }
          span::after {
            content: "";
            position: absolute;
            left: 155px;
            bottom: -50px;
            width: 50px;
            height: 50px;
            background: transparent;
            border-radius: 50%;
            box-shadow: 35px -35px 0 10px #fff;
          }
        }
      }
      .lnbcontainer {
        width: 315px;
        height: 100%;
        background: #5d5fef;
        overflow: hidden;
        font-weight: 400;
        font-size: 18px;
        li {
          list-style: none;
          background: #5d5fef;
          .lnblink {
            display: block;
            width: 100%;
            height: 40px;
            margin: 20px;
            display: flex;
            line-height: 40px;
            font-size: 18px;
            text-decoration: none;
            color: #c7c7c7;
            &:hover {
              font-weight: 700;
            }
            p {
              position: relative;
              display: block;
              padding: 0 3px;
              width: 75%;
              height: 80px;
              line-height: 40px;
              text-align: center;
            }
          }
        }
      }
    }
    .checklistContainer {
      width: 285px;
      height: 80px;
      font-weight: 500;
      font-size: 20px;
      .link {
        position: relative;
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #c7c7c7;
        img {
          width: 28px;
          padding: 25px;
          margin-left: 3px;
        }
        span {
          display: block;
          padding: 0 3px;
          width: 40%;
          height: 80px;
          line-height: 74px;
          text-align: center;
        }
      }
    }
    .calendarcontiner {
      position: relative;
      /* display: block; */
      top: 30px;
      left: 19px;
      border-radius: solid 1px red;
      .datepicker {
        width: 220px;
        height: 58px;
        background: #f0f7ff;
        border: none;
        border-radius: 11px;
        font-size: 20px;
        text-align: center;
        &:focus {
          outline: none;
        }
      }
      img {
        position: absolute;
        top: 14px;
        left: 10px;
        z-index: 1;
      }
      .todolist {
        display: block;
        width: 225px;
        margin-top: 22px;
        font-size: 16px;
        color: #fff;
        p {
          margin-bottom: 17px;
          font-weight: 500;
          span {
            font-size: 13px;
            color: #dadada;
            font-weight: 400;
            margin: 0 15px 0 15px;
          }
        }
      }
    }
    .logout {
      position: fixed;
      display: block;
      width: 200px;
      height: 27px;
      left: 108px;
      bottom: 70px;
      text-decoration: none;
      img {
        width: 24px;
        padding-right: 7px;
      }
      span {
        color: #fff;
        font-weight: 500;
        vertical-align: text-top;
      }
    }
  }
`;

// 네비게이션 중앙 라인
const MidLine = styled.div`
  width: 220px;
  height: 1px;
  margin: 10px 47px 30px 18px;
  border-top: 1px solid #c4c4c4;
`;
// 서브 네비게이션 보여주는 기능
// (다른 직렬을 선택하면 열려있는 직렬서브 네비 닫힘)
function Navigation({ onMouseOver, onMouseOut }) {
  const [policeShow, setPoliceShow] = useState();
  const onClickPolice = (e) => {
    setPoliceShow((prev) => !prev);
    setFireShow(false);
    setAdmineShow(false);
  };
  const [fireShow, setFireShow] = useState();
  const onClickFire = (e) => {
    setFireShow((prev) => !prev);
    setAdmineShow(false);
    setPoliceShow(false);
  };
  const [adminShow, setAdmineShow] = useState();
  const onClickAdmin = (e) => {
    setAdmineShow((prev) => !prev);
    setPoliceShow(false);
    setFireShow(false);
  };
  // 클릭시 gnb css 고정
  const [fixBackground, setFixBackground] = useState(false);
  const showFix = () => setFixBackground(!fixBackground);

  const [menuIconHover, setMenuIconHover] = useState(false);
  const [policeIconHover, setPoliceIconHover] = useState(false);
  const [fireIconHover, setFireIconHover] = useState(false);
  const [adminIconHover, setAdminIconHover] = useState(false);

  // 일정관리 라이브러리
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div>
      <StyledNavigation>
        <div className="container">
          <div className="navgation">
            <div className="logobox">
              <img src={logo} alt="logo" className="logo" />
            </div>
            <ul>
              {/* 전체개요 */}
              <li
                className="gnb"
                onMouseOver={() => setMenuIconHover(true)}
                onMouseOut={() => setMenuIconHover(false)}
              >
                <Link
                  to="/"
                  className={fixBackground ? "link activeBg" : "link"}
                  onClick={showFix}
                >
                  <img
                    src={menuIconHover ? menuColor : menu}
                    alt="menu"
                    className="navicon"
                  />
                  <span className="menutext">전체개요</span>
                </Link>
              </li>
              {/* 전체개요 끝 */}
              {/* 경찰직렬 메뉴 */}
              <li
                className="gnb"
                onMouseOver={() => setPoliceIconHover(true)}
                onMouseOut={() => setPoliceIconHover(false)}
              >
                <Link
                  to="/class=police"
                  className="link police"
                  onClick={onClickPolice}
                >
                  <img
                    src={policeIconHover ? policeColor : police}
                    alt="menu"
                    className="navicon"
                  />
                  <span className="policetext">경찰직</span>
                </Link>
                {policeShow && (
                  <div className="lnbcontainer">
                    <ul className="lnb">
                      <li>
                        <Link className="lnblink" to="/class=police">
                          <p>전체</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=police/classn=1">
                          <p>1반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=police/classn=2">
                          <p>2반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=police/classn=3">
                          <p>3반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=police/classn=5">
                          <p>5반</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* 경찰직렬 메뉴끝 */}
              {/* 소방직렬 메뉴 */}
              <li
                className="gnb"
                onMouseOver={() => setFireIconHover(true)}
                onMouseOut={() => setFireIconHover(false)}
              >
                <Link
                  to="/class=fire"
                  className="link fire"
                  onClick={onClickFire}
                >
                  <img
                    src={fireIconHover ? fireColor : fire}
                    alt="menu"
                    className="navicon"
                  />
                  <span className="firetext">소방직</span>
                </Link>
                {fireShow && (
                  <div className="lnbcontainer">
                    <ul className="lnb">
                      <li>
                        <Link className="lnblink" to="/class=fire">
                          <p>전체</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=fire/classn=1">
                          <p>1반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=fire/classn=2">
                          <p>2반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=fire/classn=3">
                          <p>3반</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* 소방직렬 메뉴끔 */}
              {/* 행정직렬 메뉴끔 */}
              <li
                className="gnb"
                onMouseOver={() => setAdminIconHover(true)}
                onMouseOut={() => setAdminIconHover(false)}
              >
                <Link
                  to="/class=admin"
                  className="link admin"
                  onClick={onClickAdmin}
                >
                  <img
                    src={adminIconHover ? adminColor : admin}
                    alt="menu"
                    className="navicon"
                  />
                  <span className="admintext">행정직</span>
                </Link>
                {adminShow && (
                  <div className="lnbcontainer">
                    <ul className="lnb">
                      <li>
                        <Link className="lnblink" to="/class=admin">
                          <p>전체</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=admin/classn=1">
                          <p>1반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=admin/classn=2">
                          <p>2반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/class=admin/classn=3">
                          <p>3반</p>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              {/* 행정직렬 메뉴끔 */}
              <MidLine />
            </ul>
            {/* 일정관리 */}
            <div className="checklistContainer">
              <Link to="/" className="link">
                <img
                  src={checklist}
                  alt="checklist"
                  className="checklisticon"
                />
                <span>일정관리</span>
              </Link>
            </div>
            {/* 일정관리 끝 */}
            {/* 달력 */}
            <div className="calendarcontiner">
              <img src={calendar} alt="menu" className="navicon" />
              <DatePicker
                className="datepicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
              <div className="todolist">
                <p>
                  <span className="time">08:00 AM</span>경찰직 모의고사
                </p>
                <p>
                  <span className="time">10:30 AM</span>관리자 회의
                </p>
              </div>
            </div>
            {/* 달력 끝 */}
            {/* 로그아웃 */}
            <div className="logout">
              <Link to="/" className="logout">
                <img src={logout} alt="logout" />
                <span>Logout</span>
              </Link>
            </div>
            {/* 로그아웃 끝 */}
          </div>
        </div>
      </StyledNavigation>
    </div>
  );
}

export default Navigation;
