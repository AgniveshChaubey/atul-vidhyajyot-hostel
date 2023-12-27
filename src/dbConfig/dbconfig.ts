import mongoose from "mongoose";

export const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_URL!)
        const connection = mongoose.connection;
        connection.on("connected", ()=>{
            console.log("MongoDB connected successfully!!")
        })
        connection.on("error", (err) => {
            console.log(err)
        })
    } catch (error) {
        console.log("Something went wrong!");
        console.log(error)
    }
}