import { UserContext } from "../context/User/UserContext";
import React, { useContext } from "react";
import { Navigate, useParams } from "react-router-dom";

export default function UserGuard({ to,children } ) {
  const [{token,userData} ]= useContext(UserContext);
  if (token && userData?.userName ) {
    return <Navigate to={`/${userData?.userName}`}  />;
  }

  return <>{children}</>;
}