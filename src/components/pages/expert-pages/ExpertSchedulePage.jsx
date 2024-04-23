import { useNavigate } from "react-router-dom";
import { useUser } from "../../../contexts/UserContext";
import { Container, Typography, useMediaQuery, useTheme } from "@mui/material";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import isoWeek from "dayjs/plugin/isoWeek";
import ROUTES from "../../../models/routeModel";
import MobileSchedule from "../../schedule/layout/MobileSchedule";
import DesktopSchedule from "../../schedule/layout/DesktopSchedule";
dayjs.extend(isoWeek);

const ExpertSchedulePage = () => {
  const { user, loading } = useUser();
  const navigate = useNavigate();
  const [date, setDate] = useState(dayjs());
  const [weekDates, setWeekDates] = useState([]);
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

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

  useEffect(() => {
    if (!loading && (!user || user.isExpert !== true)) {
      navigate(ROUTES.LOGIN.path);
      console.log("redirected");
    }
  }, [user, loading, navigate]);

  if (user) {
    if (user.isExpert === true)
      return (
        <Container>
          <Typography variant="h4" textAlign={"center"} mt={1}>
            Schedule
          </Typography>
          {isDesktop ? (
            <DesktopSchedule />
          ) : (
            <MobileSchedule
              user={user}
              date={date}
              handleDateChange={handleDateChange}
              weekDates={weekDates}
            />
          )}
        </Container>
      );
  }
};
export default ExpertSchedulePage;
