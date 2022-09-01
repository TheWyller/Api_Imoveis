import express from "express";
import "reflect-metadata";
import "express-async-errors";
import { handleErrorMiddleware } from "./middlewares/handleError.middleware";
import userRoutes from "./routers/user.routers";
import loginRoutes from "./routers/login.routes";
import categoriesRoutes from "./routers/category.routes";
import propertiesRoutes from "./routers/property.routes";
import schedulesRoutes from "./routers/schedules.routers";

const app = express();
app.use(express.json());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/categories", categoriesRoutes);
app.use("/properties", propertiesRoutes);
app.use("/schedules", schedulesRoutes);

app.use(handleErrorMiddleware);

export default app;
