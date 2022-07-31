import React from "react";
import styled from "styled-components";
import GoogleButton from "./googleButton";
import {
  GoogleLogin,
  GoogleOAuthProvider,
  useGoogleLogin,
} from "@react-oauth/google";

const Login = () => {
  const Back = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  `;

  const Base = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 25vh;
    width: 30vw;
    background: rgba(255, 255, 255, 0.15);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
    backdrop-filter: blur(8.5px);
    border-radius: 10px;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
  `;

  const LoginText = styled.h2`
    margin: 2rem 0 3rem 0;
    text-transform: uppercase;
    letter-spacing: 0.4rem;
    font-size: 2rem;
    font-weight: bold;
  `;

  return (
    <Back>
      <Base>
        <LoginText>login</LoginText>
        <GoogleButton />
      </Base>
    </Back>
  );
};

export default Login;
