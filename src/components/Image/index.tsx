import React, { forwardRef, useState } from "react";
import DefaultImage from "@/assets/images/default-image.png";
import styles from "./Image.module.scss";
import className from "classnames/bind";
const cx = className.bind(styles);

type Props = {
  src: string;
  alt?: string;
  className?: any;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
};

const Image = forwardRef<HTMLImageElement, Props>(
  ({ src = "", alt = "image", className, style, width, height }, ref) => {
    const [srcImage, setSrcImage] = useState<string>(src);

    const handleError = () => {
      setSrcImage(DefaultImage);
    };
    return (
      <img
        className={cx(styles.wrapper, className)}
        ref={ref}
        alt={alt}
        src={srcImage}
        onError={handleError}
        style={style}
        width={width || "100%"}
        height={height || "100%"}
      />
    );
  }
);

export default Image;
