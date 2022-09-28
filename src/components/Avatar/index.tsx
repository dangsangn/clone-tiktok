import React from "react";
import className from "classnames/bind";
import styles from "./Avatar.module.scss";
import Image from "../Image";
const cx = className.bind(styles);

type Props = {
  width: number;
  src: string;
  alt?: string;
};

const Avatar = ({ width, src, alt }: Props) => {
  return (
    <div className={cx("wrap")} style={{ width, height: width }}>
      <Image src={src} alt={alt || "avatar"} />
    </div>
  );
};

export default Avatar;
