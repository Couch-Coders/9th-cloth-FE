import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { storeDetile } from "lib/atom";
import { storeDetileSelector } from "lib/selector";

const useStoreDetile = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [isError, setIsError] = useState<Boolean>(false);
  const [detile, setDetile] = useRecoilState(storeDetile);

  const storeResponse = useRecoilValueLoadable(storeDetileSelector);

  const requestStore = useCallback((): void => {
    if (storeResponse === null || storeResponse === undefined) {
      return;
    }

    switch (storeResponse.state) {
      case "loading":
        setIsLoading(true);
        setIsError(false);
        break;

      case "hasValue":
        setIsLoading(false);
        setIsError(false);
        setDetile(storeResponse.contents.data);
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
    detile,
  };
};

export default useStoreDetile;
