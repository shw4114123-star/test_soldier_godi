import { it, beforeEach, afterEach, mock, describe } from "node:test"
import assert from "node:assert/strict"
import {getTransactionById} from "../DAL/spendTransactionRepository.js"
import {FICK_ID, FICK_TRANSACTION} from "./mock/spendTransactionMock.js"

describe("spendTransaction", ()=>{
    it("getTransactionById  return aobject", async ()=>{
        const result = await getTransactionById(FICK_ID)
        assert.equal(result[0].id, FICK_ID)
    })
})