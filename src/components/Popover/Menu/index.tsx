import React from "react";
import Popover from "@/components/Popover";
import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState } from "react";
import MenuItem from "../MenuItem";
import Header from "./Header";
import styles from "./Menu.module.scss";
const cx = classNames.bind(styles);

type MenuProps = {
  menu: any;
  children: any;
};
const Menu = ({ menu, children }: MenuProps) => {
  const [listMenu, setListMenu] = useState([{ data: menu }]);
  const lastList: any = listMenu[listMenu.length - 1];
  const handleOpenSubMenu = (index: number) => {
    if (lastList.data[index].children) {
      setListMenu((pre) => [...pre, lastList.data[index].children]);
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
                    onClick={() => handleOpenSubMenu(index)}
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
