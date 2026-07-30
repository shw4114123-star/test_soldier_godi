import { grtAllocations, createbudget } from "../DAL/budgetAllocationRepository.js"
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
    return allBUdget
}


export async function checkBodyAndAllotment(unit, month, benefitType, allocatedAmount) {
    if (typeof unit !== "string" || typeof month !== "string" || ["giftCard", "diningHall"].includes(benefitType)) {
        throw createError(400, "not a correct body")
    }
    const allBUdget = await checkQueryToFilter(unit, month, benefitType)
    for (const budget of allBUdget) {
        if (budget.unit === unit &&
            budget.month === month &&
            budget.benefitType === benefitType
        )
            throw createError(409, `There is already a ${benefitType} allocation for this unit this month.`)
    }
    return createbudget(unit, month, benefitType, allocatedAmount)
}