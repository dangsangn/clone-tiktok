import Line from "@/components/Line";
import VideoItem from "@/components/PostItem";
import useListVideo from "@/hooks/useListVideo";
import { IPostItem } from "@/types";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Home.module.scss";
const cx = classNames.bind(styles);
type IProps = {};
const Home = (props: IProps) => {
  const listVideo = useListVideo();

  return (
    <div className={cx("wrapper")}>
      {listVideo.map((item: IPostItem) => (
        <>
          <VideoItem data={item} key={item.id} />
          <Line />
        </>
      ))}
    </div>
  );
};

export default Home;
