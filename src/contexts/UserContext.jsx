import axios from "axios";
import { useState } from "react";
import { useContext } from "react";
import { getToken, removeToken, setToken } from "../utils/localStorageService";
import { decodeToken } from "../utils/jwtService";
const { createContext } = require("react");

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleError = (error) => {
    if (error.response) {
      // Server error
      setError(error.response.data);
    } else if (error.request) {
      // Network error
      setError("Network Error");
    } else {
      // Other error
      setError(error.message);
    }
  };

  // create user in DB
  const signupUser = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3500/users",
        data: formData,
      });
      return response.data;
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  // requests token from server
  const loginUser = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3500/users/login",
        data: formData,
      });
      setToken(response.data);
      return response.data;
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    removeToken();
    setUser(null);
  };

  // requests user data
  const getUserData = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = getToken();
      if (!token) throw new Error("Unauthorized user. Please log in");
      const user = decodeToken(token);
      const response = await axios({
        method: "get",
        url: `http://localhost:3500/users/userInfo/${user._id}`,
        headers: { "x-auth-token": token },
      });
      setUser(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        loginUser,
        logoutUser,
        signupUser,
        getUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
