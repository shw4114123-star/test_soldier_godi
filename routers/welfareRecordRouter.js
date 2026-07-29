import express from "express";
import { createBenefitRecord, getBenefitsById, chengeBenefitPeriod } from "../DAL/welfareRecordRepository.js";


const router = express.Router()


router.post("/soldiers/:soldierId/benefits", async (req, res) => {
    const { soldierId } = req.params
    const { unit, benefitType, details, decisionReason, budgetApproved } = req.body
    const benefits = await createBenefitRecord(soldierId, unit, benefitType, details, decisionReason, budgetApproved)
    res.json(benefits)
})

router.get("/soldiers/:soldierId/benefits", async (req, res) => {
    const { soldierId } = req.params
    const soldier = await getBenefitsById(soldierId)
    res.json(soldier)
})

router.patch("/soldiers/:soldierId/benefits", async (req, res) => {
    const { benefitType, details, decisionReason, budgetApproved } = req.body
    const { soldierId } = req.params
    const benefits = await chengeBenefitPeriod(soldierId, benefitType, details, decisionReason, budgetApproved)
    res.json(benefits)

})
export default router