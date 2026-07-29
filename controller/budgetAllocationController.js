import { createbudget, grtAllocations } from "../DAL/budgetAllocationRepository.js";


export const createbudgets = async (req, res) => {
    const body = req.body
    const data = await createbudget(body)
    res.status(201).json("New assignment")
}

export const getOctions = async (req, res) =>{
    const {unit, month, benefitType} = req.query
    const budget = await grtAllocations(unit, month, benefitType)
    res.json(budget)
}