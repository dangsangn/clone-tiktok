import React from "react";
import styles from "./Footer.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
type Props = {};

const Footer = (props: Props) => {
  const NavigateComp = (props: any) => (
    <a className={cx("link")} href={props.link}>
      {props.name}
    </a>
  );
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-item")}>
        {[
          "About",
          "TikTok Browse",
          "Newsroom",
          "Contact",
          "Careers",
          "ByteDance",
        ].map((item: string) => (
          <NavigateComp key={item} link={item} name={item} />
        ))}
      </div>
      <div className={cx("wrapper-item")}>
        {[
          "TikTok for Good",
          "Advertise",
          "Developers",
          "Transparency",
          "TikTok Rewards",
        ].map((item: string) => (
          <NavigateComp key={item} link={item} name={item} />
        ))}
      </div>
      <div className={cx("wrapper-item")}>
        {[
          "Help",
          "Safety",
          "Terms",
          "Privacy",
          "Creator Portal",
          "Community Guidelines",
        ].map((item: string) => (
          <NavigateComp key={item} link={item} name={item} />
        ))}
      </div>
    </div>
  );
};

export default Footer;
