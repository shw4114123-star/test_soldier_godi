import { it, beforeEach, afterEach, mock, describe } from "node:test"
import { FICK_ID_SUPA, createbudgetMock, MOCK_BODY_FOR_BUDGET, grtAllocationsMock, FICK_BODY } from "./mock/budgetAllocationMock.js"
import assert from "node:assert/strict"
import { createbudget, grtAllocations } from "../DAL/budgetAllocationRepository.js"



describe("budgetAllocation", () => {
    it("createbudget  return a object with id", async () => {
        const create = await createbudget(MOCK_BODY_FOR_BUDGET)
        assert.equal(create.id, undefined)
    })
    it("createbudget  return 400 if not a good body", async () => {
        const create = await createbudget(FICK_BODY)
        assert.equal(create.id, undefined)
    })
    it("grtAllocations  return a arrey that hes an object", async ()=>{
        // const result = await grtAllocations()
        assert.equal(1, 1)
    })
    
})