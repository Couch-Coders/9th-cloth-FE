import { ReactElement } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  children?: ReactElement;
  authentication: boolean;
}

export default function PrivateRoute({
  authentication,
}: PrivateRouteProps): React.ReactElement | null {
  const isAuthenticated = localStorage.getItem("user");

  if (authentication) {
    return isAuthenticated === null || isAuthenticated === "false" ? (
      <Navigate to="/login" />
    ) : (
      <Outlet />
    );
  } else {
    return isAuthenticated === null || isAuthenticated === "false" ? (
      <Outlet />
    ) : (
      <Navigate to="/" />
    );
  }
}
