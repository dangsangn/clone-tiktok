import React from "react";
import classNames from "classnames/bind";
import styles from "./HashTag.module.scss";
import { Link } from "react-router-dom";
import { HashTagIcon, MusicIcon } from "../icons";
import { discover } from "@/data";
const cx = classNames.bind(styles);

export type HashTagProps = {
  name: string;
  type: "music" | "hashtag";
};

const HashTag = () => {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("title")}>Discover</p>
      {discover.map((item: HashTagProps, index: number) => (
        <Link
          key={index}
          to={`/${item.type}/${item.name}`}
          className={cx("wrapper-link")}
        >
          <span className={cx("wrap-icon")}>
            {item.type === "music" ? <MusicIcon /> : <HashTagIcon />}
          </span>
          <span className={cx("name")}>{item.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default HashTag;
