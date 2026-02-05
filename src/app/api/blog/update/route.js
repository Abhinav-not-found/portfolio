import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/model/blog.model"
import { getUserId } from "@/helper/server/user/get-user-id"
import { uploadImage } from "@/helper/extra/upload-image"
import { createSlug } from "@/helper/extra/create-slug"
import mongoose from "mongoose"

export async function PUT(req) {
  try {
    await connectDB()

    const userId = await getUserId()
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }

    const data = await req.formData()
    const id = data.get("id")
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

    if (!id || id === "undefined" || !mongoose.Types.ObjectId.isValid(id)) {
      return NextResponse.json(
        { message: "Invalid blog id" },
        { status: 400 }
      )
    }

    const blog = await Blog.findById(id)
    if (!blog) {
      return NextResponse.json({ message: "Blog not found" }, { status: 404 })
    }

    // ownership check (important)
    if (String(blog.authorId) !== String(userId)) {
      return NextResponse.json({ message: "Forbidden" }, { status: 403 })
    }

    // update fields
    blog.title = title
    blog.content = content
    blog.featured = featured === "true"

    // regenerate slug only if title changed
    if (title !== blog.title) {
      blog.slug = await createSlug(title)
    }

    // upload new banner only if provided
    if (banner && typeof banner !== "string") {
      blog.banner = await uploadImage(banner)
    }

    await blog.save()

    return NextResponse.json(
      {
        message: "Blog updated successfully",
        data: blog,
      },
      { status: 200 }
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
