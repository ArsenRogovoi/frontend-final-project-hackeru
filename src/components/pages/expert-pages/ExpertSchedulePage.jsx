import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import ROUTES from "../../../models/routeModel";
import ExpertSchedule from "../../schedule/layout/ExpertSchedule";
dayjs.extend(isoWeek);

const ExpertSchedulePage = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate(ROUTES.LOGIN.path);
    }
  }, []);

  const [date, setDate] = useState(dayjs());
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

  useEffect(() => {
    updateWeekDates(date);
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
          handleDateChange={handleDateChange}
          weekDates={weekDates}
        />
      </Box>
    );
};
export default ExpertSchedulePage;
