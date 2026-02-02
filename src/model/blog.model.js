import mongoose from "mongoose"

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
      trim: true,
      minlength: [2, "Title too short"],
      maxlength: [120, "Title too long"],
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true
    },
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
      index: true
    },
    content: {
      type: String,
      required: true,
      minlength: [10, "Content too short"],
      maxlength: [50000, "Content too long"],
    },
    banner: {
      type: String,
      default: ''
    },
    featured: {// shown on homepage or not
    type: Boolean,
    default: false
  },
  },
  { timestamps: true }
)


const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema)

export default Blog
