import classnames from "classnames/bind";
import React, { useEffect, useState } from "react";

import Button from "@/components/Button";
import { CommentIcon, HeartIcon } from "@/components/icons";
import Image from "@/components/Image";
import { useAuthStore } from "@/store/auth";
import { usePostDetailStore } from "@/store/post";
import { Link } from "react-router-dom";
import CommentDetail from "../CommentDetail";
import FormComment from "../FormComment";
import styles from "./DetailInfo.module.scss";
const cx = classnames.bind(styles);

const DetailInfo = () => {
  const {
    caption,
    postedById,
    postedBy,
    likes,
    comments,
    postId,
    setLikeAction,
  } = usePostDetailStore();
  const { userProfile } = useAuthStore();
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    if (likes) {
      const checkLiked = likes.findIndex(
        (item: any) => item._ref === userProfile._id
      );
      if (checkLiked !== -1) {
        setLike(true);
      } else {
        setLike(false);
      }
    }
  }, [likes, userProfile._id]);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert("Copied the text: " + window.location.href);
    }
  };

  const handleLike = async () => {
    if (postId && userProfile._id) {
      setLikeAction({ userId: userProfile._id, postId, like: !like });
    }
  };

  return (
    <div className={cx("wrap")}>
      <div className={cx("wrap-post")}>
        <div className={cx("wrap-account")}>
          <div className={cx("wrap-info")}>
            <Link to={""}>
              <div className={cx("logo")}>
                <Image src={postedBy?.image || ""} />
              </div>
            </Link>
            <Link to={""}>
              <div className={cx("info-account")}>
                <h3 className={cx("info-account__name")}>
                  {postedBy?.userName}
                </h3>
                <p>{postedById}</p>
              </div>
            </Link>
          </div>
          <div className={cx("wrap-button")}>
            <Button outline>Follow</Button>
          </div>
        </div>
        <div className={cx("wrap-body")}>
          <div className={cx("wrap-captions")}>
            <div className={cx("caption")}>{caption}</div>{" "}
            <div className={cx("topic")}>
              <Link to={""}>#Trending</Link>
            </div>
          </div>
          <div className={cx("wrap-action")}>
            <div className={cx("action")}>
              <div className={cx("icon-item")}>
                <div className={cx("wrap-icon")} onClick={handleLike}>
                  <HeartIcon color={like ? "#fe2c55" : "black"} />
                </div>
                <strong className={cx({ count: true, "cursor-pointer": true })}>
                  {likes ? likes?.length : 0}
                </strong>
              </div>
              <div className={cx("icon-item")}>
                <div className={cx("wrap-icon")}>
                  <CommentIcon />
                </div>
                <strong className={cx("count")}>
                  {comments ? comments?.length : 0}
                </strong>
              </div>
            </div>
            <div className={cx("copy-link")}>
              <p className={cx("link")}>{window.location.href}</p>
              <button className={cx("button-copy")} onClick={handleCopyLink}>
                Copy link
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={cx("wrap-comment")}>
        <CommentDetail comments={comments} />
      </div>
      <div className={cx("wrap-form-comment")}>
        <FormComment userId={userProfile._id} postId={postId} />
      </div>
    </div>
  );
};

export default DetailInfo;
