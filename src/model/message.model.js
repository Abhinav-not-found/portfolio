import mongoose from "mongoose"

const messageSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
    maxlength: [50, "Name cannot exceed 50 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    lowercase: true,
    trim: true,
    match: [
    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
    "Please enter a valid email",
  ],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
    trim: true,
    maxlength: [1000, "Message is too long"],
  },
},
  { timestamps: true }
)

export default mongoose.models.Message ||
  mongoose.model("Message", messageSchema)
