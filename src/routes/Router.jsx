import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ROUTES from "../models/routeModel";
import EntryPage from "../pages/EntryPage";
import GlobalLayout from "../layouts/GlobalLayout";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT} element={<GlobalLayout />}>
      <Route index element={<EntryPage />} />
      <Route path={ROUTES.ABOUT} element={<>about</>} />
      <Route path={ROUTES.CONTACT} element={<>contacts</>} />
      <Route path={ROUTES.FAV_EXPERTS} element={<>favorite experts</>} />
      <Route path={ROUTES.LOGIN} element={<>login page</>} />
      <Route path={ROUTES.SIGNUP} element={<>sign up page</>} />
      <Route path={ROUTES.PROFILE} element={<>profile page</>} />
      <Route path="*" element={<>error page</>} />
    </Route>
  )
);

export default Router;
