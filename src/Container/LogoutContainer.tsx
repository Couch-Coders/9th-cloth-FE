import React, { useEffect } from "react";
import { useSetRecoilState, useResetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { authAtom, idTokenAtom } from "lib/atom";

const LogoutContainer = () => {
  const setAuth = useSetRecoilState(authAtom);
  const resetUser = useResetRecoilState(idTokenAtom);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("user");
    setAuth("");
    resetUser();
    googleLogout();
    navigate("/login");
  }, []);

  return <div></div>;
};

export default LogoutContainer;
