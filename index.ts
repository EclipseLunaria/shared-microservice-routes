import { Router } from "express";
import healthRouter from "./src/routes/healthRoute";

const commonRouter = Router();

commonRouter.use(healthRouter);

export default commonRouter;
