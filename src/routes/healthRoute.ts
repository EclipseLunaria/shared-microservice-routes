import { Request, Response, Router } from "express";

const healthRouter = Router();
healthRouter.get("/status", (req: Request, res: Response) => res.send("OK"));

export default healthRouter;
