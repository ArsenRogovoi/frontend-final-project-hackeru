import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import ROUTES from "../../../models/routeModel";
import ExpertSchedule from "../../schedule/layout/ExpertSchedule";
import useAppointmentApi from "../../../hooks/useAppointmentApi";
dayjs.extend(isoWeek);

const ExpertSchedulePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();
  const {
    loading,
    error,
    appointments,
    createAppointment,
    getMonthAppointments,
    deleteAppointment,
  } = useAppointmentApi();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.LOGIN.path);
    }
  }, []);

  const [date, setDate] = useState(dayjs().startOf("day"));
  const [weekDates, setWeekDates] = useState([]);

  const handleDateChange = (newDate) => {
    setDate(newDate);
    updateWeekDates(newDate);
  };

  const updateWeekDates = (currentDate) => {
    const endOfWeek = currentDate.endOf("week");
    let days = [];
    for (
      let day = currentDate;
      day.isBefore(endOfWeek) || day.isSame(endOfWeek, "day");
      day = day.add(1, "day")
    ) {
      days.push(day);
    }
    setWeekDates(days);
  };

  const handleCreateAppointment = (modalStartTime, modalEndTime) => {
    const appointment = {
      startTime: modalStartTime,
      endTime: modalEndTime,
    };
    createAppointment(appointment);
  };

  const handleDeleteAppointment = (_id) => {
    deleteAppointment(_id);
  };

  const handleGetMonthAppts = (date) => {
    getMonthAppointments(user._id, date.month(), date.year());
  };

  useEffect(() => {
    updateWeekDates(date);
    getMonthAppointments(user._id, date.month(), date.year());
  }, []);

  if (user)
    return (
      <Box>
        <Typography variant="h4" textAlign={"center"} mt={1}>
          Schedule
        </Typography>

        <ExpertSchedule
          user={user}
          date={date}
          appointments={appointments}
          weekDates={weekDates}
          error={error}
          loading={loading}
          handleCreateAppointment={handleCreateAppointment}
          handleDeleteAppointment={handleDeleteAppointment}
          handleDateChange={handleDateChange}
          getMonthAppointments={handleGetMonthAppts}
        />
      </Box>
    );
};
export default ExpertSchedulePage;
