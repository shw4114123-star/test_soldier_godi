
import client from "../db/budgetAllocation&spendTransactionDB.js"


export async function createSpend(body, id) {
    const { data, error } = await client.from("spendTransaction").insert({ ...body, budgetId: id }).select()
    if (error) console.error(error);
    return data
}

export async function getTransactionById(id) {
    const { data, error } = await client.from("spendTransaction").select().eq("id", id)
    if (error) console.error(error);
    return data
}

export async function getTransactionByBudgetId(id) {
    const { data, error } = await client.from("spendTransaction").select().eq("budgetId", id)
    if (error) console.error(error);
    return data
}