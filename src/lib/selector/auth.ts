import { selector } from "recoil";
import { loginPost } from "util/api/auth.api";
import { useRecoilValue, useSetRecoilState, useResetRecoilState } from "recoil";
import { authAtom, idTokenAtom } from "lib/atom";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";

const useUserActions = () => {
  const setAuth = useSetRecoilState(authAtom);
  const idToken = useRecoilValue(idTokenAtom);
  const resetToken = useResetRecoilState(idTokenAtom);
  const navigate = useNavigate();

  const login = async () => {
    return await loginPost(idToken).then((user) => {
      localStorage.setItem("user", user.data.token);
      setAuth(user.data.token);
      window.location.reload();
    });
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth("");
    resetToken();
    googleLogout();
    navigate("/login");
  };

  return {
    login,
    logout,
  };
};

export { useUserActions };
