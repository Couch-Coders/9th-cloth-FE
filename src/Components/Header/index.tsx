import React from "react";
import styled from "styled-components";
import { media } from "Style/media";
import { Link } from "react-router-dom";

const HeaderBase = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 20;
`;

const WhiteBackground = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  height: auto;
`;

const HeaderContents = styled.div`
  width: 1200px;
  height: 55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding-right: 1rem;
  padding-left: 1rem;
  ${media.tabletL`
        width: 992px;
    `}

  ${media.desktopL`
        width: 100%;
    `}
`;

const Logo = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-family: "Rajdhani";
  color: black;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;
  &:hover {
    font-size: 1.5rem;
  }
`;

const LogoutButton = styled(Link)`
  font-size: 1.4rem;
  letter-spacing: 2px;
  font-family: "Rajdhani";
  color: black;
  padding: 0.5rem;
  padding-bottom: 0.4rem;
  cursor: pointer;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s all;

  &:hover {
    font-size: 1.5rem;
  }
`;

export const Header = () => {
  return (
    <HeaderBase>
      <WhiteBackground>
        <HeaderContents>
          <Logo to="/">옷가게</Logo>
          <LogoutButton to="/logout">LOGOUT</LogoutButton>
        </HeaderContents>
      </WhiteBackground>
    </HeaderBase>
  );
};
