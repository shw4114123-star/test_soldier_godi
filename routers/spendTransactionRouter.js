import express from "express";
import { createSpend, getTransactionById } from "../DAL/spendTransactionRepository.js"

const router = express.Router()

router.post("/budget/:id/spend", async (req, res) => {
    const { id } = req.params
    const body = req.body
    const spend = await createSpend(body, id)
    res.status(201).json(spend)
})

router.get("/budget/:id/transactions", async (req, res) => {
    const { id } = req.params
    const transactions = await getTransactionById(id)
    res.json(transactions)
})


export default router