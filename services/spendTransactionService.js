import { getTransactionById } from "../DAL/spendTransactionRepository.js"
import { createError } from "../services/welfareRecordService.js"


export async function checkAllotmentId(id) {
    const allotment = await getTransactionById(id)
    if (allotment.length === 0 || !allotment) throw createError(404, "not found")
    return allotment
}