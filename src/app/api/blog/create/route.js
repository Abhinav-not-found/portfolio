import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Blog from "@/models/blog.model"
import { getUserId } from "@/helpers/server/user/get-userId"
import ImageKit from "imagekit"


const imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})

export async function POST(req) {
  try {
    // const createStatus = process.env.CREATE_BLOG

    // if (createStatus !== "enable") {
    //   return NextResponse.json(
    //     { message: "Blog creation has been temporarily disabled by the administrator. Please try again later.", code: "CREATE_BLOG_DISABLED" },
    //     { status: 403 }
    //   )
    // }

    await connectDB()

    const userId = await getUserId()
    if (!userId) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 })
    }


    const data = await req.formData()
    const title = data.get("title")
    const content = data.get("content")
    const banner = data.get("banner")

    if (!title || !content) {
      return NextResponse.json(
        { code: "FIELDS_REQUIRED", message: "All fields are required" },
        { status: 400 }
      )
    }

    let bannerUrl = null

    if (banner instanceof File) {
      if (!banner.type.startsWith("image/")) {
        return NextResponse.json(
          { message: "Invalid banner type" },
          { status: 400 }
        )
      }

      const bytes = await banner.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const upload = await imagekit.upload({
        file: buffer, 
        fileName: `blog-banner-${Date.now()}`,
        folder: "/Portfolio/Blog_Banners",
      })

      bannerUrl = upload.url
    }


    let baseSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")

    let slug = baseSlug
    let count = 1
    while (await Blog.exists({ slug })) {
      slug = `${baseSlug}-${count}`
      count++
    }

    const newBlog = await Blog.create({
      title,
      content,
      slug,
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
