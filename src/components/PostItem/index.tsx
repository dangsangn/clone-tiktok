import React from "react";
import styles from "./PostItem.module.scss";
import classnames from "classnames/bind";
import Button from "../Button";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";
=======
import { Link } from "react-router-dom";
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
import { IPostItem } from "@/types";
import Video from "../Video";
import { CommentIcon, HeartIcon, ShareIcon } from "../icons";
import Image from "../Image";
<<<<<<< HEAD
import { ROUTES_NAME } from "@/constants";
=======
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
const cx = classnames.bind(styles);

type IProps = {
  data: IPostItem;
};

const PostItem = ({ data }: IProps) => {
<<<<<<< HEAD
  const navigate = useNavigate();

  const handleRedirectDetailPage = () => {
    navigate(`${ROUTES_NAME.DETAIL}/${data.id}`);
  };

=======
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrap-avatar")}>
        <Image width={56} height={56} src={data.postedBy.image} alt="" />
      </div>
      <div className={cx("wrap-right")}>
        <div className={cx("header")}>
          <div className={cx("wrap-title")}>
            <Link to="" className={cx("wrap-posted")}>
              <h3 className={cx("user-name")}>{data.postedBy.userName}</h3>
            </Link>
            <p className={cx("caption")}>{data.caption}</p>
          </div>
          <div className={cx("wrap-button")}>
            <Button outline>Follow</Button>
          </div>
        </div>
        <div className={cx("wrap-body")}>
<<<<<<< HEAD
          <div className={cx("wrap-video")} onClick={handleRedirectDetailPage}>
            <Video url={data.video.asset.url} />
          </div>

=======
          <div className={cx("wrap-video")}>
            <Video url={data.video.asset.url} />
          </div>
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
          <div className={cx("wrap-action")}>
            <div className={cx("wrap-action-item")}>
              <div className={cx("wrap-action-icon")}>
                <HeartIcon />
              </div>
<<<<<<< HEAD
              <span>{data.likes.length}</span>
            </div>
            <Link to={`${ROUTES_NAME.DETAIL}/${data.id}`}>
              <div className={cx("wrap-action-item")}>
                <div className={cx("wrap-action-icon")}>
                  <CommentIcon />
                </div>
                <span>{data.comments.length}</span>
              </div>
            </Link>
=======
              <span>22.2k</span>
            </div>
            <div className={cx("wrap-action-item")}>
              <div className={cx("wrap-action-icon")}>
                <CommentIcon />
              </div>
              <span>122</span>
            </div>
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
            <div className={cx("wrap-action-item")}>
              <div className={cx("wrap-action-icon")}>
                <ShareIcon />
              </div>
<<<<<<< HEAD
              <span>0</span>
=======
              <span>3456</span>
>>>>>>> a1d0249830988595ab02fc0bf8709515fd55fec7
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
