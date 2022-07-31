import React from "react";
import useStoreList from "Hooks/useStore";
import SearchBase from "Components/Search";
import Loading from "Components/Loading";

const SearchContainer = () => {
  const { isLoading, isError, store } = useStoreList();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <div>Error</div>;
  }

  return <SearchBase storeList={store} />;
};

export default SearchContainer;
