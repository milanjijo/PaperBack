import express from "express";
const router = express.Router();
import { isSignedIn } from "./../middleware/auth.js";
import { getToken, processPayment } from "./../controller/paymentController.js";

router.route("/getToken").get(isSignedIn, getToken);
router.route("/").post(isSignedIn, processPayment);

export default router;
