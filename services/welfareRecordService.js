import { getBenefitsById, createBenefitRecord, chengeBenefitPeriod } from "../DAL/welfareRecordRepository.js"


export function createError(status, message) {
    const err = new Error(message);
    err.status = status
    return err
}


export async function checkBenefitBody(soldierId, unit, benefitType, details, decisionReason, budgetApproved) {
    if (await isSoldierBenefit(soldierId)) throw createError(409, "This soldier already has a benefit record.")
    if (
        unit === undefined || typeof unit !== "string" || unit.trim() === "" ||
        benefitType === undefined || benefitType.trim() === "" ||
        ["giftCard", "diningHall"].includes(benefitType) || await moom(benefitType, details) ||
        decisionReason === undefined || typeof decisionReason !== "string" || decisionReason.trim() === "" ||
        budgetApproved === undefined || typeof budgetApproved !== "boolean"
    ) throw createError(400, "not a correct body")
    return createBenefitRecord(soldierId, unit, benefitType, details, decisionReason, budgetApproved)
}

export async function isSoldierBenefit(soldierId) {
    const soldier = await getBenefitsById(soldierId)
    if (soldier) return true
    return false
}

export async function checkSoldierId(soldierId) {
    const soldier = await getBenefitsById(soldierId)
    if (!soldier) throw createError(404, "not found")
    return soldier
}

export async function checkUpdateBody(soldierId, benefitType, details, decisionReason, budgetApproved) {
    if (!await isSoldierBenefit(soldierId)) throw createError(404, "not found the soldier")
    if (
        benefitType === undefined || typeof benefitType !== "string" ||
        await moom(benefitType, details) ||
        decisionReason === undefined || typeof decisionReason !== "string" || decisionReason.trim() === "" ||
        budgetApproved === undefined || typeof budgetApproved !== "boolean"
    ) throw createError(400, "not a correct body")
    return await chengeBenefitPeriod(soldierId, benefitType, details, decisionReason, budgetApproved)
}

// || benefitType["giftCard", "diningHall"] צריך לבדוק
export async function moom(benefitType, details) {
    if (benefitType === "diningHall") {
        if (details === undefined || typeof details.baseld !== "number" ||
            typeof details.kosherLevel !== "string" || details.kosherLevel.trim() === "" ||
            details.mealTimes.length < 1) return false
    }
    if (benefitType === "giftCard") {
        if (details === undefined || typeof details.cardProvider !== "string" || details.cardProvider.trim() === "" ||
            typeof details.monthlyValus !== "number" ||
            details.validMerchants.length < 1) return false
    }
}