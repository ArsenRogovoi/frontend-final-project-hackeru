import { jwtDecode } from "jwt-decode";

export const decodeToken = (token) => {
  try {
    return jwtDecode(token);
  } catch (error) {
    return null; // Failed to decode JWT
  }
};

export const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // UNIX timestamp
    return decoded.exp < currentTime; // true if token expired
  } catch (error) {
    return true; // Failed to decode JWT
  }
};
