import { createSpend, getTransactionById } from "../DAL/spendTransactionRepository.js"


export const createSpends = async (req, res) => {
    const { id } = req.params
    const body = req.body
    const spend = await createSpend(body, id)
    res.status(201).json(spend)
}

export const getTransction = async (req, res) => {
    const { id } = req.params
    const transactions = await getTransactionById(id)
    res.json(transactions)
}