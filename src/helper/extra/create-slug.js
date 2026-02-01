import Blog from "@/model/blog.model"

export const createSlug = async(title) =>{
  let baseSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")

    let slug = baseSlug
    let count = 1
    while (await Blog.exists({ slug })) {
      slug = `${baseSlug}-${count++}`
    }
    return slug
}
