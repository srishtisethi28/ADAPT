import express from "express";
import { sendContactMail } from "../controllers/contactController.js";

const contactRouter = express.Router();

// Route: POST /api/contact
contactRouter.post("/", sendContactMail);

export default contactRouter;
