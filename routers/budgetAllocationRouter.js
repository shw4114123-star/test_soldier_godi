import express from "express";
import { createbudgets, getOctions } from "../controller/budgetAllocationcontroller.js";

const router = express.Router()

router.post("/budget", createbudgets)

router.get("/budget", getOctions)

export default router