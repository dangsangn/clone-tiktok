import React from "react";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { TickedIcon } from "@/components/icons";
const cx = classNames.bind(styles);
const AccountItem = ({ data }: any) => {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("avatar")}>
        <img src={data.avatar} alt={data.full_name} />
      </div>
      <div className={cx("account")}>
        <div className={cx("wrap-title")}>
          <h4 className={cx("name")}>{data.full_name}</h4>
          {data.tick && <TickedIcon className={cx("ticked-icon")} />}
        </div>
        <p className={cx("describe")}>{data.nickname}</p>
      </div>
    </div>
  );
};

export default AccountItem;
