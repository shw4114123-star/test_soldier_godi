import { log } from "node:console";
import client from "../db/budgetAllocation&spendTransactionDB.js";
import { getTransactionByBudgetId } from "./spendTransactionRepository.js";

export async function createbudget(body) {
    const { data, error } = await client.from("budgetAllocation").insert({ ...body }).select()
    if (error) console.error(error);
    return data
}

export async function grtAllocations() {
    const { data, error } = await client.from("budgetAllocation").select()
    if (error) console.error(error);
    return CalculatingTheBudgetAndExpenses(data)
}

// פונקציה לשלוף את ההקצאת תקציב לפי מזהה בשביל לבדוק שבעסקת ניצול לא עולה על התקציב
export async function getocationById(id) {
    const { data, error } = await client.from("budgetAllocation").select().eq("id", id)
    if (error) console.error(error);
    return data
}

// פונקציית החישובים
export async function CalculatingTheBudgetAndExpenses(data) {
    const newData = []
    let id = null
    let i = 0
    for (const unit of data) {
        let remainingAmount = 0
        let spentAmount = 0
        id = unit.id
        const spendsById = await getTransactionByBudgetId(id)
        for (const spends of spendsById) {
            spentAmount = spentAmount + spends.amount
            remainingAmount = unit.allocatedAmount - spentAmount
        }
        newData.push({ ...data[i], spentAmount, remainingAmount })
        i = i + 1
    }
    return newData
}


// .eq("unit", unit).eq("month", month).eq("benefitType", benefitType)
// הפונקצייה מביאה את כל הנתונים הוולידציות אחר כך בservice
