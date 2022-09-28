import React, { useEffect } from "react";
import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import Logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import * as icons from "@/components/icons";
import { AddIcon } from "@/components/icons";
import Image from "@/components/Image";
import Login from "@/components/Login";
import Menu from "@/components/Popover/Menu";
import { MENU_ITEMS, USER_MENU } from "@/data";
import useModal from "@/hooks/useModal";
import { useAuthStore } from "@/store/auth";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "../Search";
import styles from "./Header.module.scss";
import { ROUTES_NAME } from "@/constants";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

export default function Header() {
  const { userProfile } = useAuthStore();
  const { onPresent: loginPresent, handlePreventClickOut } = useModal(
    <Login />
  );

  useEffect(() => {
    handlePreventClickOut && handlePreventClickOut();
  }, [handlePreventClickOut]);

  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper__content")}>
        <div className={cx("wrapper__logo")}>
          <Link to={ROUTES_NAME.HOME}>
            <img src={Logo} alt="top top" />
          </Link>
        </div>
        <div className={cx("wrapper__search")}>
          <Search />
        </div>
        <div className={cx("wrapper__button-header")}>
          <Button
            onClick={handleClick}
            text
            to={ROUTES_NAME.UPLOAD}
            leftIcon={<AddIcon />}
          >
            Upload
          </Button>
          {userProfile ? (
            <>
              <Tippy content="Messages">
                <button className={cx("button-action")}>
                  <icons.SendIcon />
                </button>
              </Tippy>
              <Tippy interactive content="Inbox">
                <button className={cx("button-action")}>
                  <icons.MessageIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <Button onClick={loginPresent} primary>
              Log in
            </Button>
          )}

          <Menu menu={userProfile ? USER_MENU : MENU_ITEMS}>
            {userProfile ? (
              <Image
                src={userProfile.image}
                alt=""
                className={cx("user-logo")}
              />
            ) : (
              <button className={cx("wrap-button")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
