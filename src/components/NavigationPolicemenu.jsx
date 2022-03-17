<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import police from "../image/police_gray.svg";
import policeColor from "../image/police_color.svg";
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import police from '../image/police_gray.svg'
import policeColor from '../image/police_color.svg'
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3

function NavigationPolicemenu({
  fixBackground,
  onClickShowFix,
  onClickSection,
  onMouseOver,
  onMouseOut,
  hoveredIcon,
  openedSection,
  clickTextColor,
  onClicklnb,
}) {
  return (
    <>
      <NavLink
        to="/경찰"
<<<<<<< HEAD
        className={clsx("link police", {
          activeBg: fixBackground === "policemenu",
        })}
        onClick={() => {
          onClickSection("police");
          onClickShowFix("policemenu");
        }}
        onMouseOver={() => {
          onMouseOver("policemenucolor");
        }}
        onMouseOut={() => {
          onMouseOut("policemenucolor");
=======
        className={clsx('link police', {
          activeBg: fixBackground === 'policemenu',
        })}
        onClick={() => {
          onClickSection('police')
          onClickShowFix('policemenu')
        }}
        onMouseOver={() => {
          onMouseOver('policemenucolor')
        }}
        onMouseOut={() => {
          onMouseOut('policemenucolor')
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
        }}
      >
        <img
          src={
<<<<<<< HEAD
            fixBackground === "policemenu" || hoveredIcon === "policemenucolor"
=======
            fixBackground === 'policemenu' || hoveredIcon === 'policemenucolor'
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
              ? policeColor
              : police
          }
          alt="menu"
<<<<<<< HEAD
          className={clsx("navicon", {
            policeicon: hoveredIcon === "policemenucolor",
=======
          className={clsx('navicon', {
            policeicon: hoveredIcon === 'policemenucolor',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
          })}
        />
        <span className="policetext">경찰직</span>
      </NavLink>

      <div
<<<<<<< HEAD
        className={clsx("lnbcontainer police", {
          hidden: openedSection !== "police",
=======
        className={clsx('lnbcontainer police', {
          hidden: openedSection !== 'police',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
        })}
      >
        <ul className="lnb">
          <li>
            <NavLink
              className="lnblink"
              to="/경찰"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Pclass0");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text:
                    fixBackground === "policemenu" ||
                    clickTextColor === "Pclass0",
=======
                onClicklnb('Pclass0')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: fixBackground === 'policemenu' || clickTextColor === 'Pclass0',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
                })}
              >
                전체
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lnblink"
              to="/경찰/1"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Pclass1");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Pclass1",
=======
                onClicklnb('Pclass1')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Pclass1',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
                })}
              >
                1반
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lnblink"
              to="/경찰/2"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Pclass2");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Pclass2",
=======
                onClicklnb('Pclass2')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Pclass2',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
                })}
              >
                2반
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lnblink"
              to="/경찰/3"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Pclass3");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Pclass3",
=======
                onClicklnb('Pclass3')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Pclass3',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
                })}
              >
                3반
              </p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lnblink"
              to="/경찰/5"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Pclass5");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Pclass5",
=======
                onClicklnb('Pclass5')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Pclass5',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
                })}
              >
                5반
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
<<<<<<< HEAD
  );
}

export default NavigationPolicemenu;
=======
  )
}

export default NavigationPolicemenu
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
