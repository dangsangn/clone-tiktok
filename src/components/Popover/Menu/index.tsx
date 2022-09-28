import React from "react";
import Popover from "@/components/Popover";
import { useState } from "react";
import Tippy from "@tippyjs/react/headless";
import { useGoogleLogout } from "react-google-login";

import classNames from "classnames/bind";
import MenuItem from "../MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
import { useAuthStore } from "@/store/auth";
const cx = classNames.bind(styles);

type MenuProps = {
  menu: any;
  children: any;
};
const Menu = ({ menu, children }: MenuProps) => {
  const { removeUser } = useAuthStore();
  const [listMenu, setListMenu] = useState([{ data: menu }]);
  const lastList: any = listMenu[listMenu.length - 1];
  const { signOut } = useGoogleLogout({
    clientId: `${process.env.REACT_APP_CLIENT_ID}`,
    onFailure: () => {
      console.log("error");
    },
  });
  const handleOpenSubMenu = (index: number, data: any) => {
    if (lastList.data[index].children) {
      setListMenu((pre) => [...pre, lastList.data[index].children]);
    } else {
      if (data?.title === "Log out") {
        signOut();
        removeUser();
      }
    }
  };

  const onBack = () => {
    if (listMenu.length > 1) {
      setListMenu([...listMenu.slice(0, listMenu.length - 1)]);
    }
  };

  return (
    <div>
      <Tippy
        hideOnClick={false}
        delay={[100, 300]}
        offset={[8, 0]}
        placement="bottom-end"
        arrow={true}
        render={(attrs) => (
          <div className={cx("wrap-menu")} tabIndex={-1} {...attrs}>
            <Popover>
              {lastList?.title && (
                <Header title={lastList?.title} onBack={onBack} />
              )}
              <div className={cx("menu-body")}>
                {lastList.data.map((item: any, index: number) => (
                  <MenuItem
                    key={index}
                    data={item}
                    onClick={() => handleOpenSubMenu(index, item)}
                  />
                ))}
              </div>
            </Popover>
          </div>
        )}
        interactive
        onHidden={() => {
          setListMenu([{ data: menu }]);
        }}
      >
        {children}
      </Tippy>
    </div>
  );
};

export default Menu;
