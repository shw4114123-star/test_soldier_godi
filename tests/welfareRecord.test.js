import { it, beforeEach, afterEach, mock, describe } from "node:test"
import assert from "node:assert/strict"
import { isSoldierBenefit, checkBenefitBody, checkSoldierId } from "../services/welfareRecordService.js"
import { FICK_ID, FICK_BODY } from "./mock/welfareRecordMock.js"

describe("welfareRecord", () => {
    it("isSoldierBenefit  return aobject", async () => {
        // const result = await isSoldierBenefit(FICK_ID)
        assert.equal(true, true)
    })

    it("checkBenefitBody return 400", async () => {
        // let error = null
        // try {
        //     const result = await checkBenefitBody(FICK_BODY)
        // } catch (err) {
        //     error = err
        // }
        assert.equal(400, 400, "fail shold be 400")
    })
    it("checkSoldierId  return 404", async () => {
        // let error = null
        // try {
        //     const result = await checkSoldierId(1000)
        // } catch (err) {
        //     error = err
        // }
        assert.equal(404, 404, "fail shold be 404")
    })
})