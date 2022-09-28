import React, { useState } from "react";
import className from "classnames/bind";

import styles from "./Upload.module.scss";
import UploadVideo from "./components/UploadVideo";
import Form from "./components/Form";
import { SanityAssetDocument } from "@sanity/client";
import { useAuthStore } from "@/store/auth";
import { createPostApi } from "@/api/post";
import { useNavigate } from "react-router-dom";
import { TOPIC } from "@/data";
const cx = className.bind(styles);

const optionsTopic = TOPIC.map((topic) => ({
  value: topic.name,
  label: topic.name,
}));

const Upload = () => {
  const navigate = useNavigate();
  const { userProfile } = useAuthStore();
  const [video, setVideo] = useState<SanityAssetDocument | undefined>();
  const [topic, setTopic] = useState(optionsTopic[0].value);
  const [caption, setCaption] = useState("");
  const [postSaving, setPostSaving] = useState(false);

  const handlePost = async () => {
    if (topic && caption && video) {
      setPostSaving(true);
      const doc = {
        _type: "post",
        caption,
        video: {
          _type: "file",
          asset: {
            _type: "reference",
            _ref: video?._id,
          },
        },
        userId: userProfile?._id,
        postedBy: {
          _type: "postedBy",
          _ref: userProfile?._id,
        },
        topic,
      };
      await createPostApi(doc);
      navigate("/");
    }
  };

  const handleDiscard = () => {
    setVideo(undefined);
    setTopic("");
    setCaption("");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrap-content")}>
        <div className={cx("wrap-title")}>
          <h3 className={cx("title")}>Upload video</h3>
          <p className={cx("subscribe")}>Post a video to your account</p>
        </div>
        <div className={cx("wrap-body")}>
          <div className={cx("wrap-upload")}>
            <UploadVideo video={video} setVideo={setVideo} />
          </div>
          <div className={cx("wrap-form")}>
            <Form
              handlePost={handlePost}
              handleDiscard={handleDiscard}
              topic={topic}
              setTopic={setTopic}
              caption={caption}
              setCaption={setCaption}
              postSaving={postSaving}
              optionsTopic={optionsTopic}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
