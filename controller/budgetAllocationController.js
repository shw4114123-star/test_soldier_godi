import { createbudget, grtAllocations } from "../DAL/budgetAllocationRepository.js";
import { checkQueryToFilter } from "../services/budgetAllocationService.js";

export const createbudgets = async (req, res) => {
    const body = req.body
    const data = await createbudget(body)
    res.status(201).json("New assignment")
}

export const getOctions = async (req, res) => {
    try {
        const { unit, month, benefitType } = req.query
        const budget = await checkQueryToFilter(unit, month, benefitType)
        res.json(budget)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
}