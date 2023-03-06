import express from "express";
import {index} from "../controllers/homecontroller.js"
import userRouter from "./users.js";
const router = express.Router();

router.get("/",index);
router.use("/user",userRouter);

export default router;