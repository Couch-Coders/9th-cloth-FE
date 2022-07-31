import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

interface initListState {
  items: items[];
  hasNextPage: boolean;
}

interface items {
  id: number;
  name: string;
  styles: styles[];
  thumbnails: thumbnails[];
}

interface styles {
  id: number;
  name: string;
}

interface thumbnails {
  id: string;
  path: string;
}

const storeList = atom<initListState>({
  key: "storeList",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

const storeDetile = atom({
  key: "storeDetile",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

const styleAtom = atom({
  key: "style",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

const pageAtom = atom({
  key: "pageid",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});

const detileAtom = atom({
  key: "storeid",
  default: "",
  effects_UNSTABLE: [persistAtom],
});

export { pageAtom, styleAtom, detileAtom, storeList, storeDetile };
