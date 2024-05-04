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
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupError, setSignupError] = useState(null);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const [getUserDataLoading, setGetUserDataLoading] = useState(false);
  const [getUserDataError, setGetUserDataError] = useState(null);
  const [updateUserDataLoading, setUpdateUserDataLoading] = useState(false);
  const [updateUserDataError, setUpdateUserDataError] = useState(null);

  const BASE_URL = "http://localhost:3500";

  const ERROR_TYPE = {
    SIGNUP: "signup",
    LOGIN: "login",
    GET_USER_DATA: "getUserData",
    UPDATE_USER: "updateUser",
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

      case ERROR_TYPE.UPDATE_USER:
        if (error.response) {
          // Server error
          setUpdateUserDataError(error.response.data);
        } else if (error.request) {
          // Network error
          setUpdateUserDataError("Network Error");
        } else {
          // Other error
          setUpdateUserDataError(error.message);
        }
        break;

      default:
        break;
    }
  };

  // create user in DB
  const signupUser = async (formData) => {
    setSignupLoading(true);
    setSignupError(null);
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/users`,
        data: formData,
      });
      return response.data;
    } catch (error) {
      handleError(error, ERROR_TYPE.SIGNUP);
    } finally {
      setSignupLoading(false);
    }
  };

  // requests token from server
  const loginUser = async (formData) => {
    setLoginLoading(true);
    setLoginError(null);
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/users/login`,
        data: formData,
      });
      setToken(response.data);
      return response.data;
    } catch (error) {
      handleError(error, ERROR_TYPE.LOGIN);
    } finally {
      setLoginLoading(false);
    }
  };

  const logoutUser = () => {
    removeToken();
    setUser(null);
  };

  // requests user data
  const getUserData = async () => {
    setGetUserDataLoading(true);
    setGetUserDataError(null);
    try {
      const token = getToken();
      if (!token) throw new Error("Unauthorized user. Please log in");
      const user = decodeToken(token);
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/users/userInfo/${user._id}`,
        headers: { "x-auth-token": token },
      });
      setUser(response.data);
    } catch (error) {
      handleError(error, ERROR_TYPE.GET_USER_DATA);
    } finally {
      setGetUserDataLoading(false);
    }
  };

  const updateUser = async (updObj) => {
    try {
      setUpdateUserDataError(null);
      setUpdateUserDataLoading(true);
      const token = getToken();
      const response = await axios({
        method: "put",
        url: `${BASE_URL}/users`,
        headers: { "x-auth-token": token },
        data: updObj,
      });
      setUser(response.data);
      return response.data;
    } catch (error) {
      handleError(error, ERROR_TYPE.UPDATE_USER);
    } finally {
      setUpdateUserDataLoading(false);
    }
  };

  return (
    <UserContext.Provider
      value={{
        user,
        signupLoading,
        signupError,
        loginLoading,
        loginError,
        getUserDataLoading,
        getUserDataError,
        updateUserDataLoading,
        updateUserDataError,
        loginUser,
        logoutUser,
        signupUser,
        getUserData,
        updateUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
