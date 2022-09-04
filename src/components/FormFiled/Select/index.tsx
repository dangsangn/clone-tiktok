import React from "react";
import classNames from "classnames/bind";

import styles from "./Select.module.scss";
const cx = classNames.bind(styles);

export interface OptionProp {
  value: string;
  label: string;
}

type Props = {
  name: string;
  value: string;
  onChange: (value: string) => void;
  validateMessage?: string;
  options: OptionProp[];
  label?: string;
};

const Select = ({
  name,
  value,
  onChange,
  validateMessage,
  options,
  label,
  ...selectProps
}: Props) => {
  return (
    <div className={cx("wrapper")}>
      {label && <label className={cx("label")}>{label}</label>}
      <select
        className={cx("select")}
        {...selectProps}
        value={value}
        onChange={(e: any) => onChange(e.target.value)}
        name={name}
        id={name}
      >
        {options.map((option: OptionProp) => (
          <option
            className={cx("option")}
            value={option.value}
            key={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
      {validateMessage && (
        <p className={cx("validate-message")}>{validateMessage}</p>
      )}
    </div>
  );
};

export default Select;
