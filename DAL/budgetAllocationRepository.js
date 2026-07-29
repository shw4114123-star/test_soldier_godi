import client from "../db/budgetAllocationDB.js";


export async function createsupa(body) {
    const {data, error} = await client.from("budgetAllocation").insert({...body})
    if (error) console.error(error);
    return data    
}

