import React from "react";
import useStoreDetile from "Hooks/useStoreDetile";
import ShopBase from "Components/Shop";
import Loading from "Components/Loading";

const SearchContainer = () => {
  const { isLoading, isError, detile } = useStoreDetile();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return <ShopBase storeDetile={detile} />;
};

export default SearchContainer;
