import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ROUTES from "../models/routeModel";
import EntryPage from "../pages/EntryPage";
import GlobalLayout from "../layouts/GlobalLayout";
import ExpertSearchPage from "../pages/ExpertSearchPage";
import ExpertProfilePage from "../pages/ExpertProfilePage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT.path} element={<GlobalLayout />}>
      <Route index element={<EntryPage />} />
      <Route path={ROUTES.EXPERTS.path} element={<ExpertSearchPage />} />
      <Route
        path={ROUTES.EXPERT_PROFILE.path}
        element={<ExpertProfilePage />}
      />
      <Route path={ROUTES.ABOUT.path} element={<>about</>} />
      <Route path={ROUTES.LOGIN.path} element={<>login page</>} />
      <Route path={ROUTES.SIGNUP.path} element={<>sign up page</>} />
      <Route path={ROUTES.PROFILE.path} element={<>profile page</>} />
      <Route path={ROUTES.FAV_EXPERTS.path} element={<>favorite experts</>} />
      <Route path="*" element={<>error page</>} />
      {/* <Route path={ROUTES.CONTACT} element={<>contacts</>} /> */}
    </Route>
  )
);

export default Router;
