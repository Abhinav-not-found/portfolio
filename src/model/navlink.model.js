import mongoose from "mongoose"

const NavlinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    trim: true,
  },
  link: {
    type: String,
    trim: true,
    unique:true
  }
},
  { timestamps: true }
)


export default mongoose.models.Navlink ||
  mongoose.model("Navlink", NavlinkSchema)
