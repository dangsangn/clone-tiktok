import React from "react";
import classNames from "classnames/bind";

import styles from "./Input.module.scss";
const cx = classNames.bind(styles);

type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  validateMessage?: string;
  label?: string;
};

const Input = ({
  name,
  value,
  onChange,
  validateMessage,
  label,
  ...inputProps
}: Props) => {
  return (
    <div className={cx("wrapper")}>
      {label && <label className={cx("label")}>{label}</label>}
      <input
        name={name}
        className={cx("input")}
        type="text"
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        {...inputProps}
      />
      {validateMessage && (
        <p className={cx("validate-message")}>{validateMessage}</p>
      )}
    </div>
  );
};

export default Input;
