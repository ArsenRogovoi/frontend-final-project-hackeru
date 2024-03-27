const ROUTES = {
  ROOT: { path: "/", name: "Home" },
  ABOUT: { path: "/about", name: "About" },
  AUTH: { path: "/authorization/:type", name: "Authorization page" },
  LOGIN: { path: "/authorization/login", name: "Log in" },
  SIGNUP: { path: "/authorization/signup", name: "Sign up" },
  FAV_EXPERTS: { path: "/fav-experts", name: "Favorite experts" },
  PROFILE: { path: "/profile", name: "Profile" },
  EXPERTS: { path: "/experts", name: "Find experts" },
  EXPERT_PROFILE: { path: "/experts/:expertId", name: "Expert profile" },
};

export default ROUTES;
