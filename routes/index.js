import express from "express";
import {index} from "../controllers/homecontroller.js"
const router = express.Router();

router.get("/",index);

export default router;