import axios from "axios";
import { useState } from "react";
import { getToken } from "../utils/localStorageService";

const useAppointmentApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [appointments, setAppointments] = useState([]);
  const [appointment, setAppointment] = useState(null);

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

  const createAppointment = async (appointment) => {
    try {
      setError(null);
      setLoading(true);
      const token = getToken();
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/appointments`,
        data: appointment,
        headers: { "x-auth-token": token },
      });
      setAppointments([...appointments, response.data]);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const getMonthAppointments = async (id, month, year) => {
    try {
      setError(null);
      setLoading(true);
      setAppointments(null);
      const token = getToken();
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/appointments/schedule/${id}/${month}/${year}`,
        headers: { "x-auth-token": token },
      });
      setAppointments(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteAppointment = async (id) => {
    try {
      setError(null);
      setLoading(true);
      const token = getToken();
      const response = await axios({
        method: "delete",
        url: `${BASE_URL}/appointments/${id}`,
        headers: { "x-auth-token": token },
      });
      const newAppointmentsArr = appointments.filter((app) => {
        return app._id !== response.data._id;
      });
      setAppointments(newAppointmentsArr);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    appointment,
    appointments,
    createAppointment,
    getMonthAppointments,
    deleteAppointment,
  };
};

export default useAppointmentApi;
