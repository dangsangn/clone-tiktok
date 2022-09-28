import React, { useRef, useState, useEffect } from "react";
import classnames from "classnames/bind";
import styles from "./VideoInfo.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  CloseIcon,
  MuteSpeakerIcon,
  SpeakerIcon,
  TiktokIcon,
} from "@/components/icons";
import { useNavigate } from "react-router-dom";
const cx = classnames.bind(styles);

type Props = {
  src: string
};

const VideoInfo = ({src}: Props) => {
  const navigate = useNavigate();
  const [mute, setMute] = useState<boolean>(false);
  const [play, setPlay] = useState<boolean>(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef && videoRef.current) {
      if (mute) {
        videoRef.current.muted = false;
      } else {
        videoRef.current.muted = true;
      }
      if (play) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [mute, play]);

  const handleRedirectBackHome = () => {
    navigate("/");
  };

  const handleSpeakerVideo = (e: any) => {
    e.stopPropagation();
    setMute((pre) => !pre);
  };

  const handlePlayVideo = (e: any) => {
    e.stopPropagation();
    setPlay((pre) => !pre);
  };

  return (
    <div className={cx("wrapper")} onClick={handlePlayVideo}>
      {!play && (
        <div className={cx("wrap-play")} onClick={handlePlayVideo}>
          <FontAwesomeIcon
            style={{ fontSize: "48px" }}
            icon={faPlay}
            color="white"
          />
        </div>
      )}
      <div className={cx("close-button")} onClick={handleRedirectBackHome}>
        <CloseIcon color="white" />
      </div>
      <div className={cx("wrap-tiktok")}>
        <TiktokIcon />
      </div>
      <div className={cx("video-content")}>
        <video ref={videoRef} className={cx("video")} src={src} loop />
      </div>
      <div className={cx("speaker-wrap")} onClick={handleSpeakerVideo}>
        {!mute ? (
          <MuteSpeakerIcon color="white" />
        ) : (
          <SpeakerIcon color="white" />
        )}
      </div>
    </div>
  );
};

export default VideoInfo;
