import { Badge } from "@mui/material";
import {
  DateCalendar,
  DayCalendarSkeleton,
  PickersDay,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";

const ScheduleCalendar = ({
  date,
  handleDateChange,
  getMonthAppointments,
  loading,
  appointments,
}) => {
  const getDayStatus = (day, appointments) => {
    if (!appointments) return "none";
    const formattedDay = day.format("YYYY-MM-DD");
    const dailyAppointments = appointments.filter(
      (app) => dayjs(app.startTime).format("YYYY-MM-DD") === formattedDay
    );

    const isBooked = dailyAppointments.some((app) => app.isBooked);
    const hasAppointments = dailyAppointments.length > 0;

    if (isBooked) return "booked";
    if (hasAppointments) return "available";
    return "none";
  };

  const CustomDay = ({ day, selected, outsideCurrentMonth, ...other }) => {
    const status = getDayStatus(day, appointments);

    let badgeContent;
    if (status === "booked") badgeContent = "🟡";
    if (status === "available") badgeContent = "🟢";

    return (
      <Badge
        overlap="circular"
        badgeContent={badgeContent}
        key={day.toString()}
      >
        <PickersDay
          day={day}
          selected={selected}
          outsideCurrentMonth={outsideCurrentMonth}
          {...other}
        />
      </Badge>
    );
  };

  return (
    <DateCalendar
      value={date}
      onChange={handleDateChange}
      onMonthChange={(date) => {
        getMonthAppointments(date);
      }}
      disablePast
      loading={loading}
      renderLoading={() => <DayCalendarSkeleton />}
      slots={{
        day: CustomDay,
      }}
      slotProps={{
        day: {
          appointments,
        },
      }}
    />
  );
};

export default ScheduleCalendar;
