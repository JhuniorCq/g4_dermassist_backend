import { Router } from "express";
import UserController from "../controllers/user.controller.js";

const router = Router();

router.get("/:uid", UserController.getUser);
router.post("/", UserController.register);

export default router;
