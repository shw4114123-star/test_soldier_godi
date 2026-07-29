import { connectDb } from "../db/welfareRecordDB.js";

export async function createBenefitRecord(soldierId, unit, benefitType, details, decisionReason, budgetApproved) {
    const record = await connectDb.insertOne({
        soldierId,
        unit,
        currentBenefitType: benefitType,
        history:
            [
                {
                    startDate: new Date(),
                    decisionReason,
                    budgetApproved,
                    benefitType,
                    details
                }
            ]
    }
    )
    return record.insertedId
}

export async function getBenefitsById(soldierId) {
    const soldier = await connectDb.findOne({ soldierId: soldierId })
    return soldier
}
