import { Router } from "express";
import { userRoutes } from "./User/User";
import { AuthRoute } from "./Auth/Auth";

const routes = Router();
routes.use("/user", userRoutes)
routes.use("/auth", AuthRoute);

export {routes}