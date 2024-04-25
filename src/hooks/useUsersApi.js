import axios from "axios";
import { useState } from "react";

const useUsersApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expert, setExpert] = useState(null);
  const [experts, setExperts] = useState([]);
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

  return {
    loading,
    error,
    expert,
    experts,
    user,
    users,
    getExpertData,
  };
};
export default useUsersApi;
