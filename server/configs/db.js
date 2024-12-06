import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        const res = await mongoose.connect("mongodb://127.0.0.1/rtkquery")
        console.log(res.connection.host)
    } catch (error) {
        console.error(error.message)
    }
}