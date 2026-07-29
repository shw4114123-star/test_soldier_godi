import express from "express";
import { createsupa } from "../DAL/budgetAllocationRepository.js";


const router = express.Router()

router.post("/", async (req, res) => {
    const body = req.body
    const data = await createsupa(body)
    res.status(201).json("New assignment")
})

export default router