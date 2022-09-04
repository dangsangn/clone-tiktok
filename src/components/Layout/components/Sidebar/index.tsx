import React from "react";
import styles from "./Sidebar.module.scss";
import className from "classnames/bind";
import Navbar from "@/components/Navbar";
import SuggestedAccounts from "@/components/SuggestedAccounts";
import Line from "@/components/Line";
import FollowAccounts from "@/components/FollowAccounts";
import HashTag from "@/components/HashTag";
import Footer from "../Footer";
const cx = className.bind(styles);

const Sidebar = () => {
  return (
    <div className={cx("side-bar")}>
      <div className={cx("wrap-navbar")}>
        <Navbar />
      </div>
      <Line />
      <SuggestedAccounts />
      <Line />
      <FollowAccounts />
      <Line />
      <HashTag />
      <Line />
      <Footer />
    </div>
  );
};

export default Sidebar;
