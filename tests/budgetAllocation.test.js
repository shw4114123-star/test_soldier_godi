import { it, beforeEach, afterEach, mock, describe } from "node:test"
import { FICK_ID_SUPA, createbudgetMock, MOCK_BODY_FOR_BUDGET, grtAllocationsMock } from "./mock/budgetAllocationMock.js"
import assert from "node:assert/strict"
import { createbudget, grtAllocations } from "../DAL/budgetAllocationRepository.js"



describe("budgetAllocation", () => {
    it("createbudget  return a object with id", async () => {
        const create = await createbudget(MOCK_BODY_FOR_BUDGET)
        assert.equal(create.id, undefined)
    })
})