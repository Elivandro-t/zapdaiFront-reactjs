import { useContext, type JSX } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  
  const isAuthenticated = !!localStorage.getItem("acessToken");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};
