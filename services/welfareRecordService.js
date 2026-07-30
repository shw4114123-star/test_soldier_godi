import { getBenefitsById, createBenefitRecord } from "../DAL/welfareRecordRepository.js"


export function createError(status, message) {
    const err = new Error(message);
    err.status = status
    return err
}

//  || benefitType["giftCard", "diningHall"]
export async function checkBenefitBody(soldierId, unit, benefitType, details, decisionReason, budgetApproved) {
    if (await isSoldierBenefit(soldierId)) {
        if (
            unit === undefined || typeof unit !== "string" || unit.trim() === "" ||
            benefitType === undefined || benefitType.trim() === "" ||
            details === undefined || typeof details.cardProvider !== "string" || details.cardProvider.trim() === "" ||
            typeof details.monthlyValus !== "number" ||
            details.validMerchants.length < 1 ||
            decisionReason === undefined || typeof decisionReason !== "string" || decisionReason.trim() === "" ||
            budgetApproved === undefined || typeof budgetApproved !== "boolean"
        ) throw createError(400, "not a correct body")
        return createBenefitRecord(soldierId, unit, benefitType, details, decisionReason, budgetApproved)
    }
}


export async function isSoldierBenefit(soldierId) {
    const soldier = await getBenefitsById(soldierId)
    if (soldier) throw createError(409, "This soldier already has a benefit record.")
    return true
}



export async function checkSoldierId(soldierId) {
    const soldier = await getBenefitsById(soldierId)
    if (!soldier) throw createError(404, "not found")
    return soldier
}