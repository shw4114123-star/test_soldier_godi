import { CalculatingTheBudgetAndExpenses, getocationById } from "../DAL/budgetAllocationRepository.js"
import { createSpend, getTransactionById } from "../DAL/spendTransactionRepository.js"
import { createError } from "../services/welfareRecordService.js"

export async function checkAllotmentId(id) {
    const allotment = await getTransactionById(id)
    if (allotment.length === 0 || !allotment) throw createError(404, "not found")
    return allotment
}

// בןדקת אם יש מספיק כסף בתקציב אם כן מייצרת עסקת הטבה לחייל אם לא זורק שגיאה 
export async function checkBodyAndId(body, id) {
    const allocatedAmount = await getocationById(id)
    if (allocatedAmount.length === 0 || !allocatedAmount) throw createError(404, "not found budget allocation with this id");
    const result = await CalculatingTheBudgetAndExpenses(allocatedAmount)
    const remainingAmount = result[0].remainingAmount
    if (body.amount > remainingAmount) throw createError(409, `{error: There is not enough money to spend, remainingAmount: ${remainingAmount}}`)
    return await createSpend(body, id, remainingAmount)
}