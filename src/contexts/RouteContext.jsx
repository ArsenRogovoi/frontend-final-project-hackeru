import { createContext, useContext } from "react";

const RouteContext = createContext();

export const useRouteContext = () => useContext(RouteContext);

export default RouteContext;
