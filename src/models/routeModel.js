const ROUTES = {
  //All users:
  ROOT: { path: "/", name: "Home" }, //***Dynamic page***
  ABOUT: { path: "/about", name: "About" },
  AUTH: { path: "/authorization/:type", name: "Authorization page" },
  LOGIN: { path: "/authorization/login", name: "Log in" },
  SIGNUP: { path: "/authorization/signup", name: "Sign up" },
  EXPERT_SIGNUP: { path: "/authorization/expert", name: "Expert sign up" },
  EXPERTS_SEARCH: { path: "/experts", name: "Find experts" },
  EXPERT_PROFILE: { path: "/experts/:expertId", name: "Expert profile" },
  // Authorized users:
  PROFILE: { path: "/profile", name: "Profile" },
  //Regular users:
  FAV_EXPERTS: { path: "/fav-experts", name: "Favorite experts" },
  MY_APPTS: { path: "/my-appts", name: "My appointments" },
  // Expert users: (expert/)
  EXPERT_SCHEDULE: { path: "/expert/schedule", name: "Schedule" },
  // Admin users: (admin/)
};

export default ROUTES;
