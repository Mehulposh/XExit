import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children, role, redirectPath = "/login" }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate(redirectPath, { replace: true });
      return;
    }

    let userRole;
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      userRole = payload.role;
    } catch (error) {
      console.error("Invalid token:", error);
      navigate(redirectPath, { replace: true });
      return;
    }

    const allowedRoles = Array.isArray(role) ? role : [role];
    if (!allowedRoles.includes(userRole)) {
      navigate("/", { replace: true });
    }
  }, [navigate, role, redirectPath]);

  return children;
};

export default ProtectedRoute;
