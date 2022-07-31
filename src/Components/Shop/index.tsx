import React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { detileAtom } from "lib/atom";
import { Header } from "Components/Header";
import styled from "styled-components";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { BiTimeFive } from "react-icons/bi";

const ShopBase = ({ storeDetile }: any) => {
  const navigate = useNavigate();
  const [detile, setDetile] = useRecoilState(detileAtom);

  const ShopBase = styled.div`
    display: flex;
    justify-content: center;
    width: 100%
    height: 100vh;
    padding: 65px 15%;
  `;

  const ShopContents = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
  `;

  const StoreList = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const ShopTitle = styled.div`
    font-size: 3rem;
    font-family: "Rajdhani";
    font-weight: bolder;
    padding: 40px 0 10px;
    margin-bottom: 10px;
    border-bottom: 1px solid black;
    width: 35%;
  `;

  const ShopContent = styled.div`
    font-size: 1.1rem;
    white-space: pre-wrap;
    margin-bottom: 40px;
  `;

  const ShopTime = styled.div`
    padding-top: 15px;
    font-size: 1rem;
  `;

  const MapContents = styled.div`
    padding-top: 45px;
  `;

  const MapTitle = styled.div`
    font-size: 1.7rem;
    font-family: "Rajdhani";
    font-weight: bolder;
    padding-bottom: 10px;
  `;

  const MapContent = styled.div`
    font-size: 1rem;
    font-family: "Rajdhani";
    padding-top: 10px;
  `;

  return (
    <ShopBase>
      <Header />
      <ShopContents>
        <ShopTitle>{storeDetile.name}</ShopTitle>
        <ShopContent>
          {storeDetile.contents}
          <ShopTime>
            <BiTimeFive /> {storeDetile.openTime} ~ {storeDetile.closeTime}
          </ShopTime>
        </ShopContent>
        <StoreList>
          <Box sx={{ overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={3} gap={8}>
              {storeDetile.clothes.map((item: any) => (
                <ImageListItem key={item.thumbnail.path}>
                  <img
                    src={item.thumbnail.path}
                    srcSet={item.thumbnail.path}
                    alt={item.name}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </StoreList>
        <MapContents>
          <MapTitle>위치</MapTitle>
          <Map
            center={{
              lat: storeDetile.addresses[0]?.latitude,
              lng: storeDetile.addresses[0]?.longitude,
            }}
            style={{ width: "500px", height: "300px" }}
          >
            <MapMarker
              position={{
                lat: storeDetile.addresses[0]?.latitude,
                lng: storeDetile.addresses[0]?.longitude,
              }}
            ></MapMarker>
            <MapContent>{storeDetile.addresses[0].jibunAddress}</MapContent>
          </Map>
        </MapContents>
      </ShopContents>
    </ShopBase>
  );
};

export default ShopBase;
