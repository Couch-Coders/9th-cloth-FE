import React from "react";
import { Header } from "Components/Header";
import styled from "styled-components";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { detileAtom } from "lib/atom";

const SearchBase = ({ storeList }: any) => {
  const navigate = useNavigate();
  const [detile, setDetile] = useRecoilState(detileAtom);
  const SearchBase = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
    height: 100vh;
  `;

  const StoreList = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 65px 15%;
  `;

  const StoreText = styled.div`
    padding: 10px 5px;
  `;

  const StoreTitle = styled.div`
    font-size: 1.4rem;
    font-family: "Rajdhani";
    font-weight: bolder;
  `;

  const StoreStyles = styled.div`
    display: flex;
  `;

  const StoreStyle = styled.div`
    width: auto;
    font-size: 1rem;
    font-family: "Rajdhani";
    background-color: rgb(236, 0, 0, 0.1);
    border-radius: 3px;
    padding: 3px 6px;
    margin-right: 5px;
    margin-top: 5px;
  `;
  return (
    <SearchBase>
      <Header />
      <StoreList>
        <Box sx={{ overflowY: "scroll" }}>
          <ImageList variant="masonry" cols={3} gap={8}>
            {storeList.items.map((item: any) => (
              <div
                onClick={() => {
                  setDetile(item.name);
                  navigate(`/shop`);
                }}
              >
                <ImageListItem key={item.thumbnails[0].path}>
                  <img
                    src={`${item.thumbnails[0].path}`}
                    srcSet={`${item.thumbnails[0].path}`}
                    alt={item.name}
                    loading="lazy"
                  />
                  <StoreText>
                    <StoreTitle>{item.name}</StoreTitle>
                    <StoreStyles>
                      {item.styles.map((style: any, id: any) => {
                        return <StoreStyle>{style.name}</StoreStyle>;
                      })}
                    </StoreStyles>
                  </StoreText>
                </ImageListItem>
              </div>
            ))}
          </ImageList>
        </Box>
      </StoreList>
    </SearchBase>
  );
};

export default SearchBase;
