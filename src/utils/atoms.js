import { atom } from "recoil";

export const isDarkAtom = atom({
  key: "isDark",
  default: false,
});

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});
