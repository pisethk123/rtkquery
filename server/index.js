import express from "express"
import cors from "cors"
import productRoutes from "./routes/productRoutes.js"
import { connectDB } from "./configs/db.js"

connectDB()

const app = express()

app.use(express.json())
app.use(cors({origin: "http://localhost:5173"}))

app.use("/", productRoutes)

app.listen(3000, () => console.log("server is running"))