import React from "react";
import classNames from "classnames/bind";
import Header from "@/components/Layout/components/Header";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

type Props = { children: React.ReactNode };
const HeaderLayout = ({ children }: Props) => {
  return (
    <>
      <div className={cx("header")}>
        <Header />
      </div>
      <div className={cx("body")}>{children}</div>
    </>
  );
};

export default HeaderLayout;
