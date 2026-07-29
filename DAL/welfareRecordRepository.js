import { connectDb } from "../db/welfareRecordDB.js";

export async function create(body) {
    const date = Date()
    const record = await connectDb.insertOne({
        ...body,
        history: {
            $push: { history: { startDate: date }}
        }
    })
    return record.insertedId
}
