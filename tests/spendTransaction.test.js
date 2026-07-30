import { it, beforeEach, afterEach, mock, describe } from "node:test"
import assert from "node:assert/strict"
import { getTransactionById, getTransactionByBudgetId } from "../DAL/spendTransactionRepository.js"
import { FICK_ID, FICK_TRANSACTION } from "./mock/spendTransactionMock.js"

describe("spendTransaction", () => {
    it("getTransactionById  return aobject", async () => {
        const result = await getTransactionById(FICK_ID)
        assert.equal(result[0].id, FICK_ID)
    })
    it("getTransactionByBudgetId, return an object, with data", async () => {
        const result = await getTransactionByBudgetId(FICK_ID)
        assert.equal(result[0].budgetId, FICK_ID)
    })
    it("getTransactionByBudgetId return 404", async () => {
        let error = null
        try {
            const result = await getTransactionByBudgetId(1111111)
        } catch (err) {
            error = err
        }
        assert.equal(error, null, "fail shold be 404")
    })
})