import React from "react";
import { Header } from "Components/Header";
import styled from "styled-components";
import Search from "./Search";

const MainBase = () => {
  const MainBase = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const TitleBase = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const ContentTitle = styled.div`
    font-size: 4rem;
    letter-spacing: 2px;
    font-family: "Rajdhani";
    font-weight: bolder;
  `;
  return (
    <div>
      <Header />
      <MainBase>
        <div>
          <TitleBase>
            <ContentTitle>어떤 스타일을 찾고 계세요?</ContentTitle>
          </TitleBase>
          <Search />
        </div>
      </MainBase>
    </div>
  );
};

export default MainBase;
