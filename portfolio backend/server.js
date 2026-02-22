import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Enquiry from "./Schema.js";
import cors from "cors";

dotenv.config();
const app= express();
const PORT = 8080;
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URL)
.then((results) => {
    console.log(`DB connected`)
}).catch((err) => {
    console.log(err)
})

app.post("/enquiry", async (req, res) => {
    try
    {const {Name, Email, Message} = req.body;

    if (!Name || !Email || !Message) {
    return res.status(400).json({ error: "All fields are required" });
}
    await Enquiry.create({Name, Email, Message})
    res.status(201).json({message:`info sent`})}
    catch(err) {
        res.status(500).json({message:`Something went wrong ${err}`})
    }
})

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})