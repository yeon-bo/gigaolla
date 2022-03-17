<<<<<<< HEAD
import React from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

import admin from "../image/admin_gray.svg";
import adminColor from "../image/admin_color.svg";
=======
import React from 'react'
import { NavLink } from 'react-router-dom'
import clsx from 'clsx'

import admin from '../image/admin_gray.svg'
import adminColor from '../image/admin_color.svg'
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3

function NavigationAdminmenu({
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
        to="/행정"
<<<<<<< HEAD
        className={clsx("link admin", {
          activeBg: fixBackground === "adminmenu",
        })}
        onClick={() => {
          onClickSection("admin");
          onClickShowFix("adminmenu");
        }}
        onMouseOver={() => {
          onMouseOver("adminmenucolor");
        }}
        onMouseOut={() => {
          onMouseOut("adminmenucolor");
=======
        className={clsx('link admin', {
          activeBg: fixBackground === 'adminmenu',
        })}
        onClick={() => {
          onClickSection('admin')
          onClickShowFix('adminmenu')
        }}
        onMouseOver={() => {
          onMouseOver('adminmenucolor')
        }}
        onMouseOut={() => {
          onMouseOut('adminmenucolor')
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
        }}
      >
        <img
          src={
<<<<<<< HEAD
            fixBackground === "adminmenu" || hoveredIcon === "adminmenucolor"
              ? adminColor
              : admin
          }
          alt="menu"
          className={clsx("navicon", {
            adminicon: hoveredIcon === "adminmenucolor",
=======
            fixBackground === 'adminmenu' || hoveredIcon === 'adminmenucolor' ? adminColor : admin
          }
          alt="menu"
          className={clsx('navicon', {
            adminicon: hoveredIcon === 'adminmenucolor',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
          })}
        />
        <span className="admintext">행정직</span>
      </NavLink>

      <div
<<<<<<< HEAD
        className={clsx("lnbcontainer admin", {
          hidden: openedSection !== "admin",
=======
        className={clsx('lnbcontainer admin', {
          hidden: openedSection !== 'admin',
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
        })}
      >
        <ul className="lnb">
          <li>
            <NavLink
              className={
<<<<<<< HEAD
                clsx("link admin", {
                  activeBg: fixBackground === "adminmenu",
                })
                  ? "lnblink fontWhite"
                  : "lnblink "
=======
                clsx('link admin', {
                  activeBg: fixBackground === 'adminmenu',
                })
                  ? 'lnblink fontWhite'
                  : 'lnblink '
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
              }
              to="/행정"
            >
              <p className="clickde_text">전체</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              className="lnblink"
              to="/행정/1"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Aclass1");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Aclass1",
=======
                onClicklnb('Aclass1')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Aclass1',
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
              to="/행정/2"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Aclass2");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Aclass2",
=======
                onClicklnb('Aclass2')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Aclass2',
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
              to="/행정/3"
              onClick={() => {
<<<<<<< HEAD
                onClicklnb("Aclass3");
              }}
            >
              <p
                className={clsx("lnbtext", {
                  clickde_text: clickTextColor === "Aclass3",
=======
                onClicklnb('Aclass3')
              }}
            >
              <p
                className={clsx('lnbtext', {
                  clickde_text: clickTextColor === 'Aclass3',
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
export default NavigationAdminmenu;
=======
  )
}
export default NavigationAdminmenu
>>>>>>> 8143d2359c99e0c292595f2d5f0c6d95129c0ca3
