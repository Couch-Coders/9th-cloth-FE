import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

const authAtom = atom({
  key: "auth",
  default: localStorage.getItem("user"),
});

const idTokenAtom = atom({
  key: "idToken",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export { authAtom, idTokenAtom };
