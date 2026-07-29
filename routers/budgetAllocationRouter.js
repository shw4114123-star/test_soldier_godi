import express from "express";
import { createsupa, grtAllocations } from "../DAL/budgetAllocationRepository.js";


const router = express.Router()

router.post("/budget", async (req, res) => {
    const body = req.body
    const data = await createsupa(body)
    res.status(201).json("New assignment")
})

router.get("/budget", async (req, res) =>{
    const {unit, month, benefitType} = req.query
    const budget = await grtAllocations(unit, month, benefitType)
    res.json(budget)
})

export default router