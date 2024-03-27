import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import ROUTES from "../models/routeModel";
import EntryPage from "../components/pages/EntryPage";
import GlobalLayout from "../components/layouts/GlobalLayout";
import ExpertSearchPage from "../components/pages/ExpertSearchPage";
import ExpertProfilePage from "../components/pages/ExpertProfilePage";
import AuthPage from "../components/pages/AuthPage";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTES.ROOT.path} element={<GlobalLayout />}>
      <Route index element={<EntryPage />} />
      <Route path={ROUTES.EXPERTS.path} element={<ExpertSearchPage />} />
      <Route
        path={ROUTES.EXPERT_PROFILE.path}
        element={<ExpertProfilePage />}
      />
      <Route path={ROUTES.AUTH.path} element={<AuthPage />} />
      <Route path={ROUTES.ABOUT.path} element={<>about</>} />
      <Route path={ROUTES.PROFILE.path} element={<>profile page</>} />
      <Route path={ROUTES.FAV_EXPERTS.path} element={<>favorite experts</>} />
      <Route path="*" element={<>error page</>} />
    </Route>
  )
);

export default Router;
