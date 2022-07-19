import React from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

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
  node,
  onClick,
  separate,
  ...passProps
}) {
  let Comp = "button";
  const props = {
    onClick,
    ...passProps,
  };

  //remote event listeners when button is clicked
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (props[key].startsWith("on") && typeof props[key] === "function") {
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
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx("icon")}>{leftIcon}</span>}
      <span className={cx("title")}>{children}</span>
      {rightIcon && <span className={cx("icon")}>{rightIcon}</span>}
    </Comp>
  );
}
