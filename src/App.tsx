import React from "react";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivateRoute from "util/PrivateRoute";
import MainContainer from "Container/MainContainer";
import SearchContainer from "Container/SearchContainer";
import LoginContainer from "Container/LoginContainer";
import LogoutContainer from "Container/LogoutContainer";
import ShopContainer from "Container/ShopContainer";

const App = () => {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute authentication={false} />}>
            <Route path="/login" element={<LoginContainer />} />
          </Route>
          <Route element={<PrivateRoute authentication={true} />}>
            <Route path="/" element={<MainContainer />} />
            <Route path="/logout" element={<LogoutContainer />} />
            <Route path="/search" element={<SearchContainer />} />
            <Route path="/shop" element={<ShopContainer />} />
            <Route path="*" element={<MainContainer />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
};

export default App;
