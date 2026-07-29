import { getBenefitsById } from "../DAL/welfareRecordRepository.js"


export function createError(status, message) {
    const err = new Error(message);
    err.status = status
    return err
}


export async function checkBenefitBody(unit, benefitType, details, decisionReason, budgetApproved) {
    return (
        unit !== undefined &&
        benefitType !== undefined &&
        details !== undefined &&
        decisionReason !== undefined &&
        budgetApproved !== undefined
    )
}
// עדיין לא בדקתי את הפונקצייה

export async function isSoldierBenefit(soldierId) {
}
// לא בדקתי עדיין


export async function checkSoldierId(soldierId) {
    const soldier = await getBenefitsById(soldierId)
    if (!soldier) throw createError(404, "not found")
    return soldier
}