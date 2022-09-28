import React, { useEffect, useState } from "react";
import Avatar from "@/components/Avatar";
import { HeartEntryIcon, MoreDotIcon } from "@/components/icons";
import className from "classnames/bind";
import { Link } from "react-router-dom";
import styles from "./CommentDetail.module.scss";
import { getSingleUserApi } from "@/api/user";

const cx = className.bind(styles);

type Props = {
  comment: string;
  postedById: string;
};

function CommentItem({ comment, postedById }: Props) {
  const [singleUser, setSingleUser] = useState({ userName: "", image: "" });

  useEffect(() => {
    const getUserDetail = async () => {
      const result = await getSingleUserApi(postedById);
      if (result) {
        setSingleUser({ userName: result?.userName, image: result?.image });
      }
    };
    getUserDetail();
  }, [postedById]);

  return (
    <div className={cx("wrap-comment")}>
      <Link to={""} className={cx("link-avatar")}>
        <Avatar width={40} src={singleUser.image} />
      </Link>
      <div className={cx("wrap-body")}>
        <Link to={""}>
          <h3 className={cx("name")}>{singleUser.userName}</h3>
        </Link>
        <p className={cx("comment")}>{comment}</p>
        <div className={cx("date-reply")}>
          <span className={cx("date")}>9-7</span>
          <span className={cx("reply")}>Reply</span>
        </div>
      </div>
      <div className={cx("wrap-right")}>
        <span className={cx("dot-more")}>
          <MoreDotIcon width={"2.4rem"} height={"2.4rem"} />
        </span>
        <span className={cx("wrap-heart")}>
          <HeartEntryIcon />
        </span>
        <span className={cx("count-heart")}>10</span>
      </div>
    </div>
  );
}

export default CommentItem;
