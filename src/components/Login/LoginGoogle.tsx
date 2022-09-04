import className from "classnames/bind";
import React, { useEffect } from "react";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

import Button from "../Button";
import { GoogleIcon } from "../icons";
import styles from "./Login.module.scss";
import useCreateUser from "@/hooks/useCreateUser";
const cx = className.bind(styles);
type Props = {};

const LoginGoogle = (props: Props) => {
  const createUser = useCreateUser();
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_CLIENT_ID,
        scope: "email",
      });
    }

    gapi.load("client:auth2", start);
  }, []);

  const responseGoogle = (response: any) => {
    if (response) {
      createUser(response);
    }
  };

  return (
    <div>
      <GoogleLogin
        isSignedIn={true}
        clientId={`${process.env.REACT_APP_CLIENT_ID}`}
        render={(renderProps) => (
          <Button
            text
            className={cx("wrap-button")}
            onClick={renderProps.onClick}
            disabled={renderProps.disabled}
          >
            <div className={cx("button-content")}>
              <span className={cx("button-icon")}>
                <GoogleIcon />
              </span>
              <span className={cx("button-text")}>Continue with Google</span>
            </div>
          </Button>
        )}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
};

export default LoginGoogle;
