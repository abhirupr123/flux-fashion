import express from "express";
import { checkout, payment } from "./controller.js";

const router=express.Router();
router.route("/checkout").post(checkout);
router.route("/payment").post(payment);

export default router;