import express from "express";
import { create } from "../DAL/welfareRecordRepository.js";


const router = express.Router()


router.get("/", async (req, res)=>{
    const body = req.body
    const momo = await create(body)
    res.json(momo)
})

export default router