import React from 'react'
import styles from "./Login.module.scss";
import className from "classnames/bind";
import Button from "../Button";
import { CloseIcon, PersonIcon } from "../icons";
import { Link } from "react-router-dom";
import LoginGoogle from "./LoginGoogle";
const cx = className.bind(styles);

type Props = {
  handleDismiss?: () => void;
};

function Login({ handleDismiss }: Props) {
  const handleCloseModal = () => {
    handleDismiss && handleDismiss();
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("button-close")} onClick={handleCloseModal}>
        <CloseIcon />
      </div>
      <div className={cx("wrapper-content")}>
        <div className={cx("title")}>Log in to TikTok</div>
        <Button text className={cx("wrap-button")}>
          <div className={cx("button-content")}>
            <span className={cx("button-icon")}>
              <PersonIcon />
            </span>
            <span className={cx("button-text")}>
              Use phone / email / username
            </span>
          </div>
        </Button>
        <LoginGoogle handleDismiss={handleDismiss} />
      </div>
      <div className={cx("wrapper-footer")}>
        <div>Don’t have an account? </div>
        <Link className={cx("wrapper-footer__link")} to="/signup">
          Sign up
        </Link>
      </div>
    </div>
  );
}

export default Login