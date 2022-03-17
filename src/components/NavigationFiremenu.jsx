<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import fire from "../image/fire_gray.svg";
import fireColor from "../image/fire_color.svg";
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import fire from '../image/fire_gray.svg'
import fireColor from '../image/fire_color.svg'
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3

function NavigationFiremenu({
  fixBackground,
  onClickShowFix,
  onClickSection,
  onMouseOver,
  onMouseOut,
  hoveredIcon,
  openedSection,
  onClicklnb,
  clickTextColor,
}) {
  return (
    <>
      <NavLink
        to="/소방"
<<<<<<< HEAD
        className={clsx("link fire", {
          activeBg: fixBackground === "firemenu",
        })}
        onClick={() => {
          onClickSection("fire");
          onClickShowFix("firemenu");
        }}
        onMouseOver={() => {
          onMouseOver("firemenucolor");
        }}
        onMouseOut={() => {
          onMouseOut("firemenucolor");
        }}
      >
        <img
          src={
            fixBackground === "firemenu" || hoveredIcon === "firemenucolor"
              ? fireColor
              : fire
          }
          alt="menu"
          className={clsx("navicon", {
            fireicon: hoveredIcon === "firemenucolor",
=======
        className={clsx('link fire', {
          activeBg: fixBackground === 'firemenu',
        })}
        onClick={() => {
          onClickSection('fire')
          onClickShowFix('firemenu')
        }}
        onMouseOver={() => {
          onMouseOver('firemenucolor')
        }}
        onMouseOut={() => {
          onMouseOut('firemenucolor')
        }}
      >
        <img
          src={fixBackground === 'firemenu' || hoveredIcon === 'firemenucolor' ? fireColor : fire}
          alt="menu"
          className={clsx('navicon', {
            fireicon: hoveredIcon === 'firemenucolor',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
          })}
        />
        <span className="firetext">소방직</span>
      </NavLink>

      <div
<<<<<<< HEAD
        className={clsx("lnbcontainer fire", {
          hidden: openedSection !== "fire",
=======
        className={clsx('lnbcontainer fire', {
          hidden: openedSection !== 'fire',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
        })}
      >
        <ul className="lnb">
          <li>
            <NavLink
              className={
<<<<<<< HEAD
                clsx("link fire", {
                  activeBg: fixBackground === "firemenu",
                })
                  ? "lnblink fontWhite"
                  : "lnblink "
=======
                clsx('link fire', {
                  activeBg: fixBackground === 'firemenu',
                })
                  ? 'lnblink fontWhite'
                  : 'lnblink '
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
              }
              to="/소방"
            >
              <p className="clickde_text">전체</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lnblink"
              to="/소방/1"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Fclass1");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Fclass1",
=======
                onClicklnb('Fclass1')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Fclass1',
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
              to="/소방/2"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Fclass2");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Fclass2",
=======
                onClicklnb('Fclass2')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Fclass2',
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
              to="/소방/3"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Fclass3");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Fclass3",
=======
                onClicklnb('Fclass3')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Fclass3',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
                })}
              >
                3반
              </p>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
<<<<<<< HEAD
  );
}

export default NavigationFiremenu;
=======
  )
}

export default NavigationFiremenu
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
