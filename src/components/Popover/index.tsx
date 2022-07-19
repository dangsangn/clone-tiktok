import React from "react";
import classNames from "classnames/bind";
import styles from "./Popover.module.scss";
const cx = classNames.bind(styles);

export type childrenProp = {
  children: React.ReactNode;
};
export default function Popover({ children }: childrenProp) {
  return <div className={cx("wrapper")}>{children}</div>;
}
