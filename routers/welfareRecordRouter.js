import express from "express";
import { createBenefitRecord, getBenefitsById, chengeBenefitPeriod } from "../DAL/welfareRecordRepository.js";
import { createBenefit, getById, chengeBenefit } from "../controller/welfareRecordController.js";

const router = express.Router()

router.post("/soldiers/:soldierId/benefits", createBenefit)

router.get("/soldiers/:soldierId/benefits", getById)

router.patch("/soldiers/:soldierId/benefits", chengeBenefit)

export default router