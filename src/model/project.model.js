import mongoose from "mongoose"

const projectSchema = new mongoose.Schema({
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
  desc: {
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
    default: ''
  },
  thumbnail: { // picture or banner
    type: String,
    default: ''
  },
  live: { // link
    type: String,
    default: ''
  },
  github: {// link
    type: String,
    default: ''
  },
  latest: {// badge
    type: Boolean,
    default: false
  },
  featured: {// shown on homepage or not
    type: Boolean,
    default: false
  },
},
  { timestamps: true }
)
export default mongoose.models.project ||
  mongoose.model("Project", projectSchema)
