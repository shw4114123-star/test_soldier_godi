import { grtAllocations } from "../DAL/budgetAllocationRepository.js"
import { createError } from "./welfareRecordService.js"


export async function checkQueryToFilter(unit, month, benefitType) {
    let allBUdget = await grtAllocations()
    if (unit) {
        allBUdget = allBUdget.filter(budget => budget.unit === unit)
    }
    if (month) {
        allBUdget = allBUdget.filter(budget => budget.month === month)
    }
    if (benefitType) {
        allBUdget = allBUdget.filter(budget => budget.benefitType === benefitType)
    }
    if (allBUdget.length === 0 || !allBUdget) throw createError(200, "not found budget with this parameters")
    return allBUdget
}