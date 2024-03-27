const ROUTES = {
  ROOT: { path: "/", name: "Home" },
  ABOUT: { path: "/about", name: "About" },
  AUTH: { path: "/authorization", name: "Log in" },
  FAV_EXPERTS: { path: "/fav-experts", name: "Favorite experts" },
  PROFILE: { path: "/profile", name: "Profile" },
  EXPERTS: { path: "/experts", name: "Find experts" },
  EXPERT_PROFILE: { path: "/experts/:expertId", name: "Expert profile" },
};

export default ROUTES;
