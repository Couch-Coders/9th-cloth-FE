import { selector } from "recoil";
import { storesGET, storesDetileGET } from "util/api/stores.api";
import { styleAtom, pageAtom, detileAtom } from "lib/atom";

export const storeListSelector = selector({
  key: "storeListSelector",
  get: async ({ get }) => {
    const data = await storesGET({
      page: get(pageAtom),
      style: get(styleAtom),
    });

    return data;
  },
});

export const storeDetileSelector = selector({
  key: "storeDetileSelector",
  get: async ({ get }) => {
    const data = await storesDetileGET({
      id: get(detileAtom),
    });

    return data;
  },
});
