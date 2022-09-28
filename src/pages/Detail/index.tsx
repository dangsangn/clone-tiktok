import React, { useEffect } from "react";
import { usePostDetailStore } from "@/store/post";
import classNames from "classnames/bind";
import { useParams } from "react-router-dom";
import DetailInfo from "./components/DetailInfo/DetailInfo";
import VideoInfo from "./components/VideoInfo";

import styles from "./Detail.module.scss";
const cx = classNames.bind(styles);

type Props = {};

const Detail = (props: Props) => {
  const { id } = useParams();
  const { getDetailPost, video } = usePostDetailStore();

  useEffect(() => {
    getDetailPost(id);
  }, [id, getDetailPost]);

  return (
    <div className={cx("wrap")}>
      <div className={cx("wrap-video")}>
        <VideoInfo src={video?.asset?.url || ""} />
      </div>
      <div className={cx("wrap-info")}>
        <DetailInfo />
      </div>
    </div>
  );
};

export default Detail;
