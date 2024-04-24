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
  const [responsed, setResponsed] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [getUserDataLoading, setGetUserDataLoading] = useState(false);
  const [getUserDataError, setGetUserDataError] = useState(null);

  const ERROR_TYPE = {
    SIGNUP: "signup",
    LOGIN: "login",
    GET_USER_DATA: "getUserData",
  };

  const handleError = (error, type) => {
    switch (type) {
      case ERROR_TYPE.SIGNUP:
        if (error.response) {
          // Server error
          setSignupError(error.response.data);
        } else if (error.request) {
          // Network error
          setSignupError("Network Error");
        } else {
          // Other error
          setSignupError(error.message);
        }
        break;

      case ERROR_TYPE.LOGIN:
        if (error.response) {
          // Server error
          setLoginError(error.response.data);
        } else if (error.request) {
          // Network error
          setLoginError("Network Error");
        } else {
          // Other error
          setLoginError(error.message);
        }
        break;
      case ERROR_TYPE.GET_USER_DATA:
        if (error.response) {
          // Server error
          setGetUserDataError(error.response.data);
        } else if (error.request) {
          // Network error
          setGetUserDataError("Network Error");
        } else {
          // Other error
          setGetUserDataError(error.message);
        }
        break;

      default:
        break;
    }
  };

  // create user in DB
  const signupUser = async (formData) => {
    setResponsed(false);
    setSignupLoading(true);
    setSignupError(null);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3500/users",
        data: formData,
      });
      return response.data;
    } catch (error) {
      handleError(error, ERROR_TYPE.SIGNUP);
    } finally {
      setSignupLoading(true);
      setResponsed(true);
    }
  };

  // requests token from server
  const loginUser = async (formData) => {
    setResponsed(false);
    setLoginLoading(true);
    setLoginError(null);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3500/users/login",
        data: formData,
      });
      setToken(response.data);
      return response.data;
    } catch (error) {
      handleError(error, ERROR_TYPE.LOGIN);
    } finally {
      setLoginLoading(false);
      setResponsed(true);
    }
  };

  const logoutUser = () => {
    removeToken();
    setUser(null);
  };

  // requests user data
  const getUserData = async () => {
    setResponsed(false);
    setGetUserDataLoading(true);
    setGetUserDataError(null);
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
      handleError(error, ERROR_TYPE.GET_USER_DATA);
    } finally {
      setGetUserDataLoading(false);
      setResponsed(true);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        responsed,
        signupLoading,
        signupError,
        loginLoading,
        loginError,
        getUserDataLoading,
        getUserDataError,
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
