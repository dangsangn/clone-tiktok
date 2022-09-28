import React, { useState } from "react";
import className from "classnames/bind";
import styles from "./FormComment.module.scss";
import { usePostDetailStore } from "@/store/post";

const cx = className.bind(styles);
type Props = {
  userId: string;
  postId: string;
};

const FormComment = ({ userId, postId }: Props) => {
  const { createComment } = usePostDetailStore();
  const [comment, setComment] = useState<string>("");
  const [isPosting, setIsPosting] = useState<boolean>(false);
  const handleComment = async (e: any) => {
    e.preventDefault();
    if (comment) {
      setIsPosting(true);
      await createComment({ userId, postId, comment });
      setComment("");
      setIsPosting(false);
    }
  };
  return (
    <div className={cx("wrap")}>
      <input
        className={cx("input")}
        type="text"
        placeholder="Add comment..."
        value={comment}
        onChange={(e: any) => setComment(e.target.value)}
      />
      <button className={cx("button-post")} onClick={handleComment}>
        {isPosting ? "Posting" : "Post"}
      </button>
    </div>
  );
};

export default FormComment;
