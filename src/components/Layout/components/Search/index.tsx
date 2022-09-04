import loadingImg from "@/assets/images/loading.svg";
import AccountItem from "@/components/AccountItem";
import { SearchIcon } from "@/components/icons";
import Popover from "@/components/Popover";
import useDebounce from "@/hooks/useDebounce";
import { apiSearchUser } from "@/services/search";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import React, { useEffect, useRef, useState } from "react";
import styles from "./Search.module.scss";
const cx = classNames.bind(styles);

const Search = () => {
  const [visible, setVisible] = useState(true);
  const [listSearch, setListSearch] = useState([]);
  const [search, setSearch] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const debounceValue = useDebounce({ value: search, delay: 500 });

  useEffect(() => {
    if (!debounceValue.trim()) {
      setListSearch([]);
      return;
    }

    const getSearch = async (search: string) => {
      try {
        setLoading(true);
        const { data } = await apiSearchUser({ q: search, type: "less" });
        setLoading(false);
        setListSearch(data as any);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
    if (debounceValue) {
      getSearch(debounceValue);
    }
  }, [debounceValue]);

  const handleSearch = (e: any) => {
    setSearch(e.target.value);
  };

  const handleFocus = () => {
    setVisible(true);
  };

  const handleClear = () => {
    setVisible(false);
    setSearch("");
    setListSearch([]);
    if (searchRef && searchRef.current) {
      searchRef.current.focus();
    }
  };

  const handleClickOnsite = () => {
    setVisible(false);
  };

  return (
    <div>
      <HeadlessTippy
        interactive
        render={(attrs) => (
          <div {...attrs} tabIndex={-1} className={cx("search-result")}>
            <Popover>
              <div className={cx("wrap-list-search")}>
                <p className={cx("search-title")}>Accounts</p>
                {listSearch.map((item: any, index) => (
                  <AccountItem
                    key={index}
                    id={item?.id}
                    avatar={item?.avatar}
                    fullName={item?.full_name}
                    nickname={item?.nickname}
                    tick={item?.tick}
                  />
                ))}
              </div>
            </Popover>
          </div>
        )}
        visible={visible && listSearch.length > 0}
        onClickOutside={handleClickOnsite}
        appendTo={() => document.body}
      >
        <div>
          <div className={cx("wrap-input")}>
            <input
              className={cx("input")}
              type="text"
              placeholder="Search accounts and videos"
              onChange={handleSearch}
              value={search}
              ref={searchRef}
              onFocus={handleFocus}
            />
            {search && !loading && (
              <FontAwesomeIcon
                onClick={handleClear}
                className={cx("x-mark-icon")}
                icon={faCircleXmark}
              />
            )}
            {loading && (
              <img src={loadingImg} alt="" className={cx("loading-icon")} />
            )}
            <button className={cx("button-search")}>
              <SearchIcon className={cx("search-icon")} />
            </button>
          </div>
        </div>
      </HeadlessTippy>
    </div>
  );
};

export default Search;
