import React, { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { apiSuggestedAccounts } from "@/api/user/suggestedAccounts";
import SuggestedItem from "./SuggestedItem";
const cx = classNames.bind(styles);

type Props = {};

const SuggestedAccounts = (props: Props) => {
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
    console.log("see all");
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Suggested accounts</p>
      <div className={cx("wrapper-content")}>
        {listAccounts.map((item: any) => (
          <SuggestedItem
            key={item.id}
            id={item.id}
            avatar={item.avatar}
            fullName={item.full_name}
            nickname={item.nickname}
            tick={item.tick}
            likes={item.likes_count}
            followers={item.followers_count}
          />
        ))}
      </div>
      <p onClick={handleSeeAll} className={cx("see-all")}>
        See all
      </p>
    </div>
  );
};

export default SuggestedAccounts;
