import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <>
      <CssBaseline />
      <UserProvider>
        <RouterProvider router={Router} />
      </UserProvider>
    </>
  );
};

export default App;
