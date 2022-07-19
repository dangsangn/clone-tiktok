import Logo from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import Image from "@/components/Image";
import Menu from "@/components/Popover/Menu";
import { MENU_ITEMS, USER_MENU } from "@/data";
import * as icons from "@/components/icons";
import { AddIcon } from "@/components/icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Tippy from "@tippyjs/react";
import classNames from "classnames/bind";
import "tippy.js/dist/tippy.css";
import Search from "../Search";
import styles from "./Header.module.scss";
const cx = classNames.bind(styles);

export default function Header() {
  const currentUser = true;
  const handleClick = () => {
    console.log("click");
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper__content")}>
        <div className={cx("wrapper__logo")}>
          <img src={Logo} alt="top top" />
        </div>
        <div className={cx("wrapper__search")}>
          <Search />
        </div>
        <div className={cx("wrapper__button-header")}>
          <Button
            onClick={handleClick}
            text
            href="https://www.youtube.com/"
            leftIcon={<AddIcon />}
          >
            Upload
          </Button>
          {currentUser ? (
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
            <Button onClick={handleClick} primary>
              Log in
            </Button>
          )}

          <Menu menu={currentUser ? USER_MENU : MENU_ITEMS}>
            {currentUser ? (
              <Image src="" alt="" className={cx("user-logo")} />
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
