import React, { useRef, useState } from "react";
import classNames from "classnames/bind";

import styles from "./UploadVideo.module.scss";
import Image from "@/components/Image";
import IconUpload from "@/assets/images/cloud-icon.svg";
import IconCheck from "@/assets/images/check-icon.svg";
import Button from "@/components/Button";
import { client } from "@/utils/client";
import { SanityAssetDocument } from "@sanity/client";
import Video from "@/components/Video";
const cx = classNames.bind(styles);

type Props = {
  video: SanityAssetDocument | undefined;
  setVideo: (value: SanityAssetDocument | undefined) => void;
};

const UploadVideo = ({ setVideo, video }: Props) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const [wrongType, setWrongType] = useState(false);

  const handleClickUploadFile = () => {
    if (fileRef && fileRef.current) {
      fileRef.current.click();
    }
  };

  const handleUploadFile = (e: any) => {
    const selectedFile = e.target.files[0];
    const fileTypes = ["video/mp4", "video/webm", "video/ogg"];
    if (fileTypes.includes(selectedFile.type)) {
      setWrongType(false);
      setLoading(true);
      client.assets
        .upload("file", selectedFile, {
          contentType: selectedFile.type,
          filename: selectedFile.name,
        })
        .then((data) => {
          setVideo(data);
          setLoading(false);
        });
    } else {
      setLoading(false);
      setWrongType(true);
    }
  };

  const handleChangeVideo = () => {
    setVideo(undefined);
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-content")}>
        {video ? (
          <div className={cx("wrap-video")}>
            <Video url={video?.url} />
          </div>
        ) : (
          <label className={cx("wrap-label")} htmlFor="upload-file">
            {loading ? (
              <p className={cx("loading")}>Loading...</p>
            ) : (
              <>
                <Image src={IconUpload} width={40} height={30} />
                <p className={cx("title")}>Select video to upload</p>
                <p className={cx("describe1")}>Or drag and drop a file</p>
                <p className={cx("describe2")}>
                  <span>MP4 or WebM</span>
                  <span>720x1280 resolution or higher</span>
                  <span>Up to 10 minutes</span>
                  <span>Less than 2 GB</span>
                </p>
                <Button
                  onClick={handleClickUploadFile}
                  style={{ width: "100%", marginTop: "32px" }}
                  primary
                >
                  Select file
                </Button>
              </>
            )}
          </label>
        )}
      </div>
      <input
        id="upload-file"
        ref={fileRef}
        type="file"
        className={cx("file")}
        onChange={handleUploadFile}
      />
      {wrongType && (
        <p className={cx("text-wrong")}>
          Please select an video file (mp4 or webm or ogg)
        </p>
      )}
      {video && (
        <div className={cx("wrap-change-video")}>
          <div className={cx("wrap-change-video-left")}>
            <Image
              style={{ marginRight: "4px" }}
              width={16}
              height={16}
              src={IconCheck}
            />
            <p>{video?.originalFilename}</p>
          </div>
          <div onClick={handleChangeVideo} className={cx("text-change-video")}>
            Change video
          </div>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
