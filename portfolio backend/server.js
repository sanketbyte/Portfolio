import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";

import Enquiry from "./Schema.js";
import cors from "cors";
import enquiryRoutes from "./Routes/enquiryRoutes.js";


const app= express();
const PORT = 8080;

app.use(cors({
    origin: 
    [ 
    "http://localhost:5173",
    "https://sanketportfolio-three.vercel.app"
]
}));
app.use(express.json());


const router = express.Router();

// Routes
app.use("/api", enquiryRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API running...");
});

mongoose.connect(process.env.MONGO_URL)
.then((results) => {
    console.log(`DB connected`)
}).catch((err) => {
    console.log(err)
})

// app.post("/enquiry", async (req, res) => {
//     try
//     {const {Name, Email, Message} = req.body;

//     if (!Name || !Email || !Message) {
//     return res.status(400).json({ error: "All fields are required" });
// }
//     await Enquiry.create({Name, Email, Message})
//     res.status(201).json({message:`info sent`})}
//     catch(err) {
//         res.status(500).json({message:`Something went wrong ${err}`})
//     }
// })





// router.post("/enquiry", async (req, res) => {

//   const { Name, Email, Message } = req.body;

//   try {

//     await sendEmail(Name, Email, Message);

//     res.status(200).json({
//       success: true,
//       message: "Enquiry sent successfully"
//     });

//   } catch (error) {

//     res.status(500).json({
//       success: false,
//       message: "Email failed"
//     });

//   }

// });

// export default router;

app.listen(PORT, () => {
    console.log(`The server is running on port ${PORT}`)
})