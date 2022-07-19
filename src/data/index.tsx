import { LanguageIcon } from "@/components/icons";
import * as icons from "@/components/icons";
import React from "react";
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

export { MENU_ITEMS, USER_MENU };
