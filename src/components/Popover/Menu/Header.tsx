import Button from "@/components/Button";
import { ArrowLeftIcon } from "@/components/icons";
import classNames from "classnames/bind";
import React from "react";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

type HeaderProps = {
  title: string;
  onBack: () => void;
};
const Header = ({ title, onBack }: HeaderProps) => {
  return (
    <Button
      className={cx("menu-header")}
      leftIcon={
        <span className={cx("menu-header-icon")} onClick={onBack}>
          <ArrowLeftIcon />
        </span>
      }
    >
      {title}
    </Button>
  );
};

export default Header;
