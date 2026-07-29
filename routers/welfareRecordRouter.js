import express from "express";
import { createBenefitRecord, getBenefitsById } from "../DAL/welfareRecordRepository.js";


const router = express.Router()


router.post("/soldiers/:soldierId/benefits", async (req, res) => {
    const { soldierId } = req.params
    const { unit, benefitType, details, decisionReason, budgetApproved } = req.body
    const benefits = await createBenefitRecord(soldierId, unit, benefitType, details, decisionReason, budgetApproved)
    res.json(benefits)
})

router.get("/soldiers/:soldierId/benefits", async (req, res)=>{
    const {soldierId} = req.params
    const soldier = await getBenefitsById(soldierId)
    res.json(soldier)
})

export default router