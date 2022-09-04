import { LanguageIcon } from "@/components/icons";
import * as icons from "@/components/icons";
import React from "react";
import { HashTagProps } from "@/components/HashTag";
const MENU_ITEMS = [
  {
    icon: <LanguageIcon />,
    title: "English",
    children: {
      title: "Language",
      data: [
        {
          type: "language",
          code: "en",
          title: "English",
        },
        {
          type: "language",
          code: "vi",
          title: "Tiếng Việt",
        },
      ],
    },
  },
  {
    icon: <icons.FeedbackIcon />,
    title: "Feedback and help",
    to: "/feedback",
  },
  {
    icon: <icons.KeyboardIcon />,
    title: "Keyboard shortcuts",
  },
];

const USER_MENU = [
  {
    icon: <icons.ProfileIcon />,
    title: "View profile",
    to: "/@hoaa",
  },
  {
    icon: <icons.CoinIcon />,
    title: "Get coins",
    to: "/coin",
  },
  {
    icon: <icons.SettingIcon />,
    title: "Settings",
    to: "/settings",
  },
  ...MENU_ITEMS,
  {
    icon: <icons.LogoutIcon />,
    title: "Log out",
    to: "/logout",
    separate: true,
  },
];

const NAV_BAR = [
  {
    icon: <icons.HomeIcon />,
    title: "For you",
    to: "/",
  },
  {
    icon: <icons.GroupPerson />,
    title: "Following",
    to: "/following",
  },
  {
    icon: <icons.LiveIcon />,
    title: "LIVE",
    to: "/live",
  },
];

const discover: HashTagProps[] = [
  {
    name: "mackedoi",
    type: "hashtag",
  },
  {
    name: "suthatla",
    type: "hashtag",
  },
  {
    name: "sansangthaydoi",
    type: "hashtag",
  },
  {
    name: "Yêu Đơn Phương Là Gì (MEE Remix) - Mee",
    type: "music",
  },
  {
    name: "Thiên Thần Tình Yêu - RICKY STAR",
    type: "music",
  },
  {
    name: "7749hieuung",
    type: "hashtag",
  },
  {
    name: "genzlife",
    type: "hashtag",
  },
  { name: "Tình Đã Đầy Một Tim - Huyền Tâm Môn", type: "music" },
];

export { MENU_ITEMS, USER_MENU, NAV_BAR, discover };
