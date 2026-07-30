import { ObjectId } from "mongodb";
import { createBenefitRecord, getBenefitsById, chengeBenefitPeriod } from "../DAL/welfareRecordRepository.js";
import { checkSoldierId, checkBenefitBody } from "../services/welfareRecordService.js";


export const createBenefit = async (req, res) => {
    try {
        const { soldierId } = req.params
        const { unit, benefitType, details, decisionReason, budgetApproved } = req.body
        const benefits = await checkBenefitBody(soldierId, unit, benefitType, details, decisionReason, budgetApproved);
        res.status(201).json(benefits)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
}

export const getById = async (req, res) => {
    try {
        const { soldierId } = req.params
        const soldier = await checkSoldierId(soldierId)
        res.json(soldier)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
}

export const chengeBenefit = async (req, res) => {
    const { benefitType, details, decisionReason, budgetApproved } = req.body
    const { soldierId } = req.params
    const benefits = await chengeBenefitPeriod(soldierId, benefitType, details, decisionReason, budgetApproved)
    res.json(benefits)

}