import React, { createContext, useState, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const register = async (userData) => {
    try {
      const response = await axios.post("/api/v1/register", userData);
      if (response.status === 201) {
        const loginResponse = await axios.post("/api/v1/login", {
          email: userData.email,
          password: userData.password,
        });

        if (loginResponse.status === 200) {
          const { token, userId, email } = loginResponse.data;
          const newUser = { email, userId, token };
          setUser(newUser);
          sessionStorage.setItem("user", JSON.stringify(newUser));
          sessionStorage.setItem("authToken", token);
        }
      }
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  };

  const login = async (userData) => {
    try {
      const response = await axios.post("/api/v1/login", userData);
      if (response.status === 200) {
        const { token, userId, email } = response.data;
        const newUser = { email, userId, token };
        setUser(newUser);
        sessionStorage.setItem("user", JSON.stringify(newUser));
        sessionStorage.setItem("authToken", token);
        return response.data;
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
    sessionStorage.removeItem("user");
    sessionStorage.removeItem("authToken");
  };

  const isAuthenticated = () => {
    return !!sessionStorage.getItem("authToken");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        register,
        login,
        logout,
        loading,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated()) {
    return <Navigate to="/login" />;
  }

  return children;
};
