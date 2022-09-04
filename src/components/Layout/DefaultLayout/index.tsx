import React from "react";
import Header from "@/components/Layout/components/Header";
import Sidebar from "@/components/Layout/components/Sidebar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
const cx = classNames.bind(styles);
type Props = {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: Props) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-header")}>
        <Header />
      </div>
      <div className={cx("wrapper-body")}>
        <div className={cx("wrapper-sidebar")}>
          <Sidebar />
        </div>
        <div className={cx("wrapper-content")}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
