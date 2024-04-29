import axios from "axios";
import { useState } from "react";
import { getToken } from "../utils/localStorageService";

const useUsersApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expert, setExpert] = useState(null);
  const [experts, setExperts] = useState([]);
  const [filteredExperts, setFilteredExperts] = useState([]);
  const [user, setUser] = useState(null);
  const [users, setUsers] = useState([]);

  const BASE_URL = "http://localhost:3500";

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

  const getExpertData = async (expertId) => {
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/users/experts/${expertId}`);
      setExpert(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const getExperts = async () => {
    try {
      setError(null);
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/users/experts`);
      setExperts(response.data);
      setFilteredExperts(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const filterExpertsByString = (string) => {
    if (string === "") {
      setFilteredExperts(experts);
    } else {
      const filteredExperts = experts.filter((exp) => {
        const {
          specialization,
          bio,
          username: { firstName, lastName },
        } = exp;
        const checkedString = `${specialization} ${firstName} ${lastName} ${bio}`;

        let keyWords = string.toLowerCase().split(" ");
        let checkedWords = checkedString.toLowerCase().split(" ");

        keyWords = keyWords.map((word) => word.replace(/[^\w]/g, ""));
        checkedWords = checkedWords.map((word) => word.replace(/[^\w]/g, ""));

        return checkedWords.some((word) => keyWords.includes(word));
      });

      setFilteredExperts(filteredExperts);
    }
  };

  const getUser = async (userId) => {
    try {
      setError(null);
      setLoading(true);
      const token = getToken();
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/users/userInfo/${userId}`,
        headers: { "x-auth-token": token },
      });
      setUser(response.data);
      return response.data;
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const likeExpert = async (expertId) => {};

  return {
    loading,
    error,
    expert,
    experts,
    filteredExperts,
    user,
    users,
    getUser,
    getExpertData,
    getExperts,
    filterExpertsByString,
  };
};
export default useUsersApi;
