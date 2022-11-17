import { UserContext } from "../context/User/UserContext";
import React, { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function AuthGuard({ children } ) {
  const [{token} ]= useContext(UserContext);
  if (!token) {
    return <Navigate to='/' />;
  }

  return <>{children}</>;
}