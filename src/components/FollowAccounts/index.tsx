import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./FollowAccounts.module.scss";
import { apiSuggestedAccounts } from "@/services/suggestedAccounts";
import AccountItem from "../AccountItem";
const cx = classNames.bind(styles);

type Props = {};

const FollowAccounts = (props: Props) => {
  const [listAccounts, setListAccounts] = useState<any[]>([]);

  useEffect(() => {
    const getListAccount = async () => {
      const list = await apiSuggestedAccounts();
      if (list.data.length > 0) {
        setListAccounts(list.data);
      }

      return () => {
        setListAccounts([]);
      };
    };
    getListAccount();
  }, []);

  const handleSeeAll = () => {
    console.log("See more");
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Following accounts</p>
      <div className={cx("wrapper-content")}>
        {listAccounts.map((item: any) => (
          <AccountItem
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            fullName={item.full_name}
            nickname={item.nickname}
            tick={item.tick}
            small
          />
        ))}
      </div>
      <p onClick={handleSeeAll} className={cx("see-all")}>
        See more
      </p>
    </div>
  );
};

export default FollowAccounts;
