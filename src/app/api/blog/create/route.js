import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/model/blog.model"
import { getUserId } from "@/helper/server/user/get-user-id"
import { uploadImage } from "@/helper/extra/upload-image"
import { createSlug } from "@/helper/extra/create-slug"

export async function POST(req) {
  try {

    await connectDB()

    const userId = await getUserId()
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const data = await req.formData()
    const title = data.get("title")
    const content = data.get("content")
    const featured = data.get("featured")
    const banner = data.get("banner")

    if (!title || !content) {
      return NextResponse.json(
        { code: "FIELDS_REQUIRED", message: "All fields are required" },
        { status: 400 }
      )
    }

    const bannerUrl = await uploadImage(banner)

    const slug = await createSlug(title)

    const newBlog = await Blog.create({
      title,
      content,
      slug,
      featured,
      authorId: userId,
      banner: bannerUrl,
    })

    return NextResponse.json(
      {
        message: "Blog created successfully",
        data: newBlog,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error(error)
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Slug already exists, retry" },
        { status: 409 }
      )
    }
    if (error.name === "ValidationError") {
      return NextResponse.json(
        {
          code: "VALIDATION_ERROR",
          message: error.message,
        },
        { status: 400 }
      )
    }
    return NextResponse.json({ message: "Server error" }, { status: 500 })
  }
}
