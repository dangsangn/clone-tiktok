import create from "zustand";
import { persist } from "zustand/middleware";

import { UserProp } from "./type";

type AuthProp = {
  userProfile: UserProp;
  userList: UserProp[];
  addUser: (user: UserProp) => void;
};

const authStore = (set: any, get: any): AuthProp => ({
  userProfile: {
    _id: "",
    _type: "",
    userName: "",
    image: "",
  },
  userList: [],
  addUser: (user: UserProp) =>
    set((state: AuthProp) => ({ ...state, userProfile: user })),
});

export const useAuthStore = create(persist(authStore, { name: "auth" }));
