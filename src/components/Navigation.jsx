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

// import { generateMedia } from "styled-media-query";

// const customMedia = generateMedia({
//   lgDesktop: "1920px",
//   mdDesktop: "1712px",
//   tablet: "1366px",
// });
const StyledNavigation = styled.div`
  /* :root { 적용이 안됩니다..
    --main-color: #5d5fef;
    --police-color: #161aec;
    --fire-color: #fd4f3a;
    --admin-color: #257e0e;
  } */
  font-family: "Noto Sans KR", sans-serif;
  min-height: 100%;
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
        /* 높이값을 주면 border-bottom-left-radius형태가 유지되지만... 
        그럼 서브 메뉴가 안늘어나요.. */
        list-style: none;
        border-top-left-radius: 30px;
        border-bottom-left-radius: 30px;
        &:hover {
          background: #fff;
        }
        .link {
          position: relative;
          display: block;
          width: 100%;
          display: flex;
          text-decoration: none;
          color: #c7c7c7;
          .menutext {
            &:hover {
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
          img,
          .navicon {
            position: relative;
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
        display: block;
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
          position: relative;
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
      display: block;
      top: 30px;
      left: 19px;
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
        left: 25px;
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
const MidLine = styled.div`
  width: 220px;
  height: 1px;
  margin: 10px 47px 30px 18px;
  border-top: 1px solid #c4c4c4;
`;

function Navigation() {
  const [policeShow, setPoliceShow] = useState();
  const onClickPolice = (e) => {
    setPoliceShow((prev) => !prev);
  };
  const [fireShow, setFireShow] = useState();
  const onClickFire = (e) => {
    setFireShow((prev) => !prev);
  };
  const [adminShow, setAdmineShow] = useState();
  const onClickAdmin = (e) => {
    setAdmineShow((prev) => !prev);
  };
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
                <Link to="/" className="link">
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
                  to="/경찰"
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
                        <Link className="lnblink" to="/경찰">
                          <p>전체</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/경찰/1">
                          <p>1반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/경찰/2">
                          <p>2반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/경찰/3">
                          <p>3반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/경찰/5">
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
                <Link to="/소방" className="link fire" onClick={onClickFire}>
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
                        <Link className="lnblink" to="/소방">
                          <p>전체</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/소방/1">
                          <p>1반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/소방/2">
                          <p>2반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/소방/3">
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
                <Link to="/행정" className="link admin" onClick={onClickAdmin}>
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
                        <Link className="lnblink" to="/행정">
                          <p>전체</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/행정/1">
                          <p>1반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/행정/2">
                          <p>2반</p>
                        </Link>
                      </li>
                      <li>
                        <Link className="lnblink" to="/행정/3">
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
