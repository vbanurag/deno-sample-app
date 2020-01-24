import { Router } from "https://deno.land/x/oak/mod.ts";
import { getDataController } from "../controllers/getData.ts";

const router = new Router();

router
  .get("/", getDataController)

export default router;