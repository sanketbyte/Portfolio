import mongoose from "mongoose";

const enquiry = new mongoose.Schema({
    Name: {type: String, required: true},
    Email: {type: String, required: true},
    Message: {type: String, required: true}
});

export default mongoose.model("Enquiry", enquiry)