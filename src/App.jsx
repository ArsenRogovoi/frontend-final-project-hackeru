import CssBaseline from "@mui/material/CssBaseline";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router";

const App = () => {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={Router} />
    </>
  );
};

export default App;
