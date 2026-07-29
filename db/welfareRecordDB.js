import { MongoClient } from "mongodb";
import "dotenv/config"

const MONGO_URL = process.env.MONGO_URL
const MONGO_DB = process.env.MONGO_DB

const connection = new MongoClient(MONGO_URL)

export async function createConnectionMongo() {
    try {
        await connection.connect()
        console.log("database connect");
    } catch (error) {
        console.error(error);
    }
}

export const db = connection.db(MONGO_DB)
export const connectDb = db.collection("welfareRecord")







