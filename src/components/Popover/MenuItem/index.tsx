import React from 'react';
import Button from "@/components/Button";
import classNames from "classnames/bind";
import styles from "./MenuItem.module.scss";
const cx = classNames.bind(styles);
type MenuItemProps = {
  data: any;
  onClick: ()=> void;
}
const MenuItem = ({ data, onClick }: MenuItemProps) => {
  return (
    <div>
      <Button
        style={{
          width: "100%",
          justifyContent: "flex-start",
        }}
        leftIcon={data?.icon}
        to={data?.to}
        onClick={onClick}
        className={cx(!data?.icon ? "padding-24" : "padding-16")}
      >
        {data?.title}
      </Button>
    </div>
  );
};

export default MenuItem;
