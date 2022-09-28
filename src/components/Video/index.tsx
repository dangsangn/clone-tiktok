import { MuteIcon, ParallelIcon, SpeakerIcon } from "@/components/icons";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Video.module.scss";
const cx = classnames.bind(styles);

type Props = {
  url: string;
};

const Video = (props: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [isMute, setIsMute] = useState<boolean>(true);
  const eleRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (eleRef && eleRef.current) {
      if (isPause) {
        eleRef.current.play();
      } else {
        eleRef.current.pause();
      }
      if (isMute) {
        eleRef.current.muted = true;
      } else {
        eleRef.current.muted = false;
      }
    }
  }, [isMute, isPause]);

  const handleClickVideo = () => {
    if (eleRef && eleRef.current) {
      if (isPause) {
        setIsPause(false);
      } else {
        setIsPause(true);
      }

      if (isMute) {
        setIsMute(false);
      } else {
        setIsMute(true);
      }
    }
  };

  const handlePause = (e: any) => {
    e.stopPropagation();
    setIsPause(!isPause);
  };

  const handleSpeaker = (e: any) => {
    e.stopPropagation();
    setIsMute(!isMute);
  };

  return (
    <div
      className={cx("wrap")}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div className={cx("wrap-video")}>
        <video
          onClick={handleClickVideo}
          ref={eleRef}
          loop
          src={props.url}
        ></video>
      </div>

      {isHover && (
        <div className={cx("wrap-footer")}>
          <div
            className={cx({ "wrap-pause": true, icon: true })}
            onClick={handlePause}
          >
            {isPause ? (
              <ParallelIcon width={"20px"} height={"20px"} color="white" />
            ) : (
              <FontAwesomeIcon
                color="white"
                icon={faPlay}
                className={cx("icon-play")}
                onClick={() => setIsHover(false)}
              />
            )}
          </div>
          <div
            onClick={handleSpeaker}
            className={cx({ "wrap-speaker": true, icon: true })}
          >
            {isMute ? (
              <MuteIcon
                width={"20px"}
                height={"20px"}
                color="white"
                onClick={() => {}}
              />
            ) : (
              <SpeakerIcon width={"20px"} height={"20px"} color="white" />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
