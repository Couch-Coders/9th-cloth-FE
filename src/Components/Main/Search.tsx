import React from "react";
import { useRecoilState } from "recoil";
import { styleAtom } from "lib/atom";
import styled from "styled-components";
import Autocomplete from "@mui/material/Autocomplete";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const StoreList = [
    "ALL",
    "minimalism",
    "vintage",
    "military",
    "punk",
    "casual",
    "street",
    "normcore",
    "modern",
    "dandy",
    "classic",
    "workwear",
  ];
  const [style, setStyle] = useRecoilState(styleAtom);
  const navigate = useNavigate();

  const SearchBase = styled.div`
    width: 100%
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const SearchContainer = styled.div`
    width: 800px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    border-bottom: 1px solid black;
  `;

  const Search = styled.input`
    width: 90%;
    height: 100%;
    border: 0;
    padding: 0;
    outline: none;
    font-size: 1.3rem;
  `;

  return (
    <div>
      <SearchBase>
        <SearchContainer>
          <Autocomplete
            id="select-on-focus"
            options={StoreList}
            onChange={(event, newValue) => {
              setStyle(newValue);
              navigate(`/search`);
            }}
            renderInput={(params) => (
              <SearchContainer ref={params.InputProps.ref}>
                <Search type="text" {...params.inputProps} />
              </SearchContainer>
            )}
          />
        </SearchContainer>
      </SearchBase>
    </div>
  );
};

export default Search;
