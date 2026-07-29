import { createSpend, getTransactionById } from "../DAL/spendTransactionRepository.js"
import { checkAllotmentId } from "../services/spendTransactionService.js"


export const createSpends = async (req, res) => {
    const { id } = req.params
    const body = req.body
    const spend = await createSpend(body, id)
    res.status(201).json(spend)
}

export const getTransction = async (req, res) => {
    try {
        const { id } = req.params
        const transactions = await checkAllotmentId(id)
        res.json(transactions)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
}