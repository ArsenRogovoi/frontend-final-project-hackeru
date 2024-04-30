import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ROUTES from "../models/routeModel";
import GlobalLayout from "../components/layouts/GlobalLayout";
import Sandbox from "../sandbox/Sandbox";
import ExpertSchedulePage from "../components/pages/expert-pages/ExpertSchedulePage";
import MyApptsPage from "../components/pages/regular-user-pages/MyApptsPage";
import AuthPage from "../components/pages/common-pages/AuthPage";
import EntryPage from "../components/pages/common-pages/EntryPage";
import ExpertProfilePage from "../components/pages/common-pages/ExpertProfilePage";
import ExpertSearchPage from "../components/pages/common-pages/ExpertSearchPage";
import FavoriteExpertsPage from "../components/pages/regular-user-pages/FavoriteExpertsPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT.path} element={<GlobalLayout />}>
      {/* All users: */}
      <Route index element={<EntryPage />} />
      <Route path="*" element={<>error page</>} />
      <Route path={ROUTES.EXPERTS_SEARCH.path} element={<ExpertSearchPage />} />
      <Route
        path={ROUTES.EXPERT_PROFILE.path}
        element={<ExpertProfilePage />}
      />
      <Route path={ROUTES.AUTH.path} element={<AuthPage />} />
      <Route path={ROUTES.ABOUT.path} element={<>about</>} />
      {/* DELETE!!! 👇 */}
      <Route path={`${ROUTES.ROOT.path}sandbox`} element={<Sandbox />} />
      {/* Authorized users: */}
      <Route path={ROUTES.PROFILE.path} element={<>profile page</>} />
      {/* Expert users: */}
      <Route
        path={ROUTES.EXPERT_SCHEDULE.path}
        element={<ExpertSchedulePage />}
      />
      {/* Regular users: */}
      <Route path={ROUTES.FAV_EXPERTS.path} element={<FavoriteExpertsPage />} />
      <Route path={ROUTES.MY_APPTS.path} element={<MyApptsPage />} />
      {/* Admin users: */}
    </Route>
  )
);

export default Router;
