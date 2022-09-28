import React, { useMemo } from "react";
import className from "classnames/bind";
import styles from "./CommentDetail.module.scss";
import CommentItem from "./CommentItem";
const cx = className.bind(styles);

type Props = {
  comments: any[];
};

const CommentDetail = ({ comments }: Props) => {
  const reserveAllComments = useMemo(() => [...comments].reverse(), [comments]);
  return (
    <div className={cx("wrap")}>
      {reserveAllComments.map((item: any) => (
        <CommentItem
          key={item?._key}
          comment={item?.comment}
          postedById={item?.postedBy?._id || item?.postedBy?._ref}
        />
      ))}
    </div>
  );
};

export default CommentDetail;
