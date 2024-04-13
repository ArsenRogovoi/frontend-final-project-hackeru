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

  const loginUser = async (formData) => {
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
    }
  };

  const getUserData = async () => {
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
    }
  };

  const logoutUser = () => {
    removeToken();
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, loginUser, getUserData, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
