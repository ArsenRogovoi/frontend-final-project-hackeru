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
  const [loading, setLoading] = useState(true);

  const loginUser = async (formData) => {
    setLoading(true);
    try {
      const response = await axios({
        method: "post",
        url: "http://localhost:3500/users/login",
        data: formData,
      });
      setToken(response.data);
      const err = await getUserData();
      if (err) throw new Error("getUserData error:", err.message);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const signupUser = async (formData) => {
    setLoading(true);
    const { email, password } = formData;
    try {
      await axios({
        method: "post",
        url: "http://localhost:3500/users",
        data: formData,
      });
      await loginUser({ email, password });
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  const getUserData = async () => {
    setLoading(true);
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
      return error;
    } finally {
      setLoading(false);
    }
  };

  const logoutUser = () => {
    removeToken();
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{ user, loading, loginUser, getUserData, logoutUser, signupUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
