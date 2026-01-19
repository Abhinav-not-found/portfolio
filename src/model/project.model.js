import mongoose from "mongoose"
import bcrypt from 'bcryptjs'

const UserSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
    trim: true,
  },
  slug: {
    type: String,
    required: [true, "Slug is required"],
    trim: true,
    lowercase: true,
    unique: true
  },
  description: {
    type: String,
    required: [true, "Description is required"],
    trim: true,
  },
  techStack: {//array of text
    type: [String],
    default: ['']
  },
  content: {
    type: String,// markdown content or html content from tip-tap editor
  },
  thumbnail: { // picture or banner
    type: String,
  },
  live: { // link
    type: String,
  },
  github: {// link
    type: String,
  },
  latest: {// badge
    type: Boolean,
  },
  featured: {// shown on homepage or not
    type: Boolean,
  },
},
  { timestamps: true }
)

UserSchema.pre("save", async function () {
  if (!this.isModified("password")) return
  this.password = await bcrypt.hash(this.password, 10)
})



export default mongoose.models.User ||
  mongoose.model("User", UserSchema)
