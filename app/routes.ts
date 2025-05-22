import { type RouteConfig, index } from "@react-router/dev/routes";

// This array defines the routes for the application.
// `index` specifies the default route, which is the "home" route located in "routes/home.tsx".
export default [index("routes/home.tsx")] satisfies RouteConfig;
