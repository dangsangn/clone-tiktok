import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

export type ButtonProps = {
  to?: string;
  href?: string;
  primary?: boolean;
  outline?: boolean;
  text?: boolean;
  routed?: boolean;
  disabled?: boolean;
  small?: boolean;
  large?: boolean;
  children: React.ReactNode;
  className?: any;
  leftIcon?: React.ReactNode | React.ReactElement;
  rightIcon?: React.ReactNode | React.ReactElement;
  onClick?: () => void;
  separate?: boolean;
  style?: React.CSSProperties;
};
export default function Button({
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  routed = false,
  disabled = false,
  small = false,
  large = false,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  separate,
  style,
  ...passProps
}: ButtonProps) {
  let Comp: any = "button";
  const props: any = {
    onClick,
    ...passProps,
  };

  //remote event listeners when button is clicked
  if (disabled) {
    (Object.keys(props) || []).forEach((key) => {
      if (key?.startsWith("on") && typeof props[key] === "function") {
        delete props[key];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("button", {
    [className]: className,
    primary,
    outline,
    text,
    routed,
    disabled,
    small,
    large,
    separate,
  });

  return (
    <Comp className={classes} {...props} style={style}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
