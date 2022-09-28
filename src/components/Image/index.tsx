import React, { forwardRef, useState, useEffect } from "react";
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
  ({ src, alt = "image", className, style, width, height }, ref) => {
    const [srcImage, setSrcImage] = useState<string>(src);
    
    useEffect(() => {
      if (src) {
        setSrcImage(src);
      }
    }, [src]);

    const handleError = () => {
      setSrcImage(DefaultImage);
    };

    return (
      <img
        className={cx("wrapper", { [className]: className })}
        ref={ref}
        alt={alt}
        src={srcImage || DefaultImage}
        onError={handleError}
        style={style}
        width={width || "100%"}
        height={height || "100%"}
      />
    );
  }
);

export default Image;
