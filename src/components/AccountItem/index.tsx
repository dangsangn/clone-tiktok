import React from "react";
import classNames from "classnames/bind";
import styles from "./Account.module.scss";
import { TickedIcon } from "@/components/icons";
import { Link } from "react-router-dom";
import Button from "../Button";
const cx = classNames.bind(styles);

export interface InfoItemProp {
  id: number;
  avatar: string;
  fullName: string;
  nickname: string;
  tick: boolean;
  small?: boolean;
}
export interface ISubscribeAccount extends InfoItemProp {
  likes: number;
  followers: number;
}
export const SubscribeAccount: React.FC<ISubscribeAccount> = (props) => {
  const handleFollow = () => {
    console.log("follow");
  };

  return (
    <div className={cx("wrap-subscribe")}>
      <div className={cx("subscribe-title")}>
        <div className={cx("subscribe-avatar")}>
          <img src={props.avatar} alt={props.fullName} />
        </div>
        <div>
          <Button className={cx("modify")} primary onClick={handleFollow}>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx("account")}>
        <div className={cx("wrap-title")}>
          <h4 className={cx("name")}>{props.fullName}</h4>
          {props.tick && <TickedIcon className={cx("ticked-icon")} />}
        </div>
        <p className={cx("describe")}>{props.nickname}</p>
      </div>
      <div className={cx("extend-info")}>
        <span>
          <strong>{props.followers ? props.followers : 0}</strong>
        </span>
        <span>Follower</span>
        <span>
          <strong>{props.likes ? props.likes : 0}</strong>
        </span>
        <span>Likes</span>
      </div>
    </div>
  );
};

const AccountItem = (props: InfoItemProp) => {
  const { small } = props;
  return (
    <Link
      to={`/account/${props.id}`}
      className={cx({ wrapper: true, "wrapper--small": small })}
    >
      <div className={cx({ avatar: true, "avatar--small": small })}>
        <img src={props.avatar} alt={props.fullName} />
      </div>
      <div className={cx({ account: true, "account--small": small })}>
        <div className={cx({ "wrap-title": true, "wrap-title--small": small })}>
          <h4 className={cx({ name: true, "name--small": small })}>
            {props.fullName}
          </h4>
          {props.tick && (
            <TickedIcon
              className={cx({
                "ticked-icon": true,
                "ticked-icon--small": small,
              })}
            />
          )}
        </div>
        <p className={cx({ describe: true, "describe--small": small })}>
          {props.nickname}
        </p>
      </div>
    </Link>
  );
};

export default AccountItem;
