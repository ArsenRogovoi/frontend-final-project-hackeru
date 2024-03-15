const ROUTES = {
  ROOT: { path: "/", name: "Home" },
  ABOUT: { path: "/about", name: "About" },
  LOGIN: { path: "/login", name: "Login" },
  SIGNUP: { path: "/sign-up", name: "Sign up" },
  FAV_EXPERTS: { path: "/fav-experts", name: "Favorite experts" },
  PROFILE: { path: "/profile", name: "Profile" },
  EXPERTS: { path: "/experts", name: "Find experts" },
  EXPERT_PROFILE: { path: "/experts/:expertId", name: "Expert profile" },
};

export default ROUTES;
