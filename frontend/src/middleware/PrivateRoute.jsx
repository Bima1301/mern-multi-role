import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { getMe } from "../features/authSlice";
import LoadingPage from "../pages/LoadingPage";
import Forbidden from "../pages/ErrorHandler/Forbidden";

export const PrivateRoute = () => {
  const dispatch = useDispatch();
  const { isError, isLoading } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (isError) {
    return <Navigate to="/dashboard/login" />;
  }
  if (isLoading) {
    return <LoadingPage />;
  }

  return <Outlet />;
};

export const AdminRoute = () => {
  const dispatch = useDispatch();
  const { isError, isLoading, user } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  if (isError) {
    return <Navigate to="/dashboard/login" />;
  }
  if (isLoading) {
    return <LoadingPage />;
  }
  if (user && user.data.role.name !== "admin") {
    return <Forbidden />;
  }

  return <Outlet />;
};

// export default PrivateRoute;
