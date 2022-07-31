import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { storeList } from "lib/atom";
import { storeListSelector } from "lib/selector";

const useStoreList = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);
  const [store, setStore] = useRecoilState(storeList);

  const storeResponse = useRecoilValueLoadable(storeListSelector);

  const requestStore = useCallback((): void => {
    if (storeResponse === null || storeResponse === undefined) {
      return;
    }

    switch (storeResponse.state) {
      case "loading":
        setIsLoading(true);
        break;

      case "hasValue":
        setIsLoading(false);
        setStore(storeResponse.contents.data);
        break;

      case "hasError":
        setIsError(true);
        setIsLoading(false);
        break;
    }
  }, [storeResponse]);

  useEffect(() => {
    requestStore();
  }, [requestStore]);

  return {
    isLoading,
    isError,
    store,
  };
};

export default useStoreList;
