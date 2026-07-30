import { checkQueryToFilter, checkBodyAndAllotment } from "../services/budgetAllocationService.js";


export const createbudgets = async (req, res) => {
    try {
        const { unit, month, benefitType, allocatedAmount } = req.body
        const data = await checkBodyAndAllotment(unit, month, benefitType, allocatedAmount)
        res.status(201).json(data)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
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