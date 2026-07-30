
import client from "../db/budgetAllocation&spendTransactionDB.js"


export async function createSpend(body, id, remainingAmount) {
    const { data, error } = await client.from("spendTransaction").insert({ ...body, budgetId: id }).select()
    if (error) return error;
    return {...data[0], remainingAmount}
}

export async function getTransactionById(id) {
    const { data, error } = await client.from("spendTransaction").select().eq("id", id)
    if (error) return error;
    return data
}

// פונקצייה בשביל החישובים
export async function getTransactionByBudgetId(id) {
    const { data, error } = await client.from("spendTransaction").select().eq("budgetId", id)
    if (error) return error;
    return data
}