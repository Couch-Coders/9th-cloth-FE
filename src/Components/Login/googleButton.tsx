import React from "react";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { useUserActions } from "lib/selector";
import { useSetRecoilState } from "recoil";
import { idTokenAtom } from "lib/atom";

const GoogleButton = () => {
  const userActions = useUserActions();
  const setIdToken = useSetRecoilState(idTokenAtom);

  return (
    <GoogleOAuthProvider clientId="446191096514-67d8v7eo3o5v476hg7lcl0sqmacdr6q6.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={async (credentialResponse) => {
          const idToken = await credentialResponse.credential;
          setIdToken(idToken);
          userActions.login();
        }}
      />
    </GoogleOAuthProvider>
  );
};

export default GoogleButton;
