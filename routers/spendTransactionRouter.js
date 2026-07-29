import express from "express";
import { createSpends, getTransction } from "../controller/spendTransactionController.js";

const router = express.Router()

router.post("/budget/:id/spend", createSpends)

router.get("/budget/:id/transactions", getTransction)

export default router