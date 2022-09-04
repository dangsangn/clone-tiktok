import { NAV_BAR } from "@/data";
import className from "classnames/bind";
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
const cx = className.bind(styles);

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className={cx("navbar")}>
      {NAV_BAR.map((item) => (
        <NavLink
          className={(nav) =>
            nav.isActive
              ? cx({ "link-item": true, active: true })
              : cx("link-item")
          }
          key={item.title}
          to={item.to}
        >
          <span className={cx("wrap-icon")}>{item.icon}</span>
          <span className={cx("wrap-text")}>{item.title}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Navbar;
