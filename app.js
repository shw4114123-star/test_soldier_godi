import express from "express"
import "dotenv/config"
import { createConnectionMongo } from "./db/welfareRecordDB.js"
import welfareRecordRouter from "./routers/welfareRecordRouter.js"
import budgetAllocationRouter from "./routers/budgetAllocationRouter.js"

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use("/", welfareRecordRouter)
app.use("/", budgetAllocationRouter)

createConnectionMongo().then(() => {
    app.listen(PORT, () => {
        console.log(`server running on http://localhost:${PORT}`);
    })
})