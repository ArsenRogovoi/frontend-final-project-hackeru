import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { UserProvider } from "./contexts/UserContext";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const App = () => {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <RouterProvider router={Router} />
        </LocalizationProvider>
      </UserProvider>
    </>
  );
};

export default App;
