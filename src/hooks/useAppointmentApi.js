import axios from "axios";
import { useState } from "react";
import { getToken } from "../utils/localStorageService";
import dayjs from "dayjs";

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

  // change to by date range for experts:
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

  // for regular users
  const getFreeApptsByDateRange = async (id, from, to) => {
    try {
      setError(null);
      setLoading(true);
      const fromDate = dayjs(from).format("YYYY-MM-DD");
      const toDate = dayjs(to).format("YYYY-MM-DD");
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/appointments/free-appts/${id}/${fromDate}/${toDate}`,
      });
      setAppointments(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const bookAppointment = async (apptId) => {
    try {
      setError(null);
      setLoading(true);
      const token = getToken();
      const response = await axios({
        method: "put",
        url: `${BASE_URL}/appointments/${apptId}`,
        headers: { "x-auth-token": token },
      });
      if (!response.data) {
        setAppointment(null);
        throw new Error("Failed to book appointment");
      }
      setAppointment(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const getMyBookedAppts = async () => {
    try {
      setError(null);
      setLoading(true);
      const token = getToken();
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/appointments/my-appts`,
        headers: { "x-auth-token": token },
      });
      setAppointments(response.data);
    } catch (error) {
      handleError(error);
    } finally {
      setLoading(false);
    }
  };

  const userCancelAppt = async (apptId) => {
    try {
      setError(null);
      setLoading(true);
      const token = getToken();
      const canceledAppt = await axios({
        method: "put",
        url: `${BASE_URL}/appointments/cancel-appt/${apptId}`,
        headers: { "x-auth-token": token },
      });
      setAppointment(canceledAppt);
      setAppointments((prevAppointments) =>
        prevAppointments.filter((appt) => appt._id !== apptId)
      );
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
    getFreeApptsByDateRange,
    bookAppointment,
    getMyBookedAppts,
    userCancelAppt,
  };
};

export default useAppointmentApi;
