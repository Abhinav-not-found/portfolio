import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Project from "@/model/project.model"
import Imagekit from 'imagekit'

const imagekit = new Imagekit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
})


export async function POST(req) {
  try {
    await connectDB()

    const data = await req.formData()
    const title = data.get('title')
    const desc = data.get('desc')
    const content = data.get('content')
    const github = data.get('github')
    const live = data.get('live')
    const techstackRaw = data.get("techstack")
    const featured = data.get('featured') === 'true'
    const latest = data.get('latest') === 'true'

    const thumbnail = data.get('thumbnail')

    if (!title || !desc) {
      return NextResponse.json(
        { code: "FIELDS_REQUIRED", message: "All fields are required" },
        { status: 400 }
      )
    }

    let techstack = []

    if (techstackRaw) {
      try {
        techstack = JSON.parse(techstackRaw)
      } catch {
        return NextResponse.json(
          { code: "INVALID_TECHSTACK", message: "Invalid tech stack format" },
          { status: 400 }
        )
      }
    }

    if (!Array.isArray(techstack)) {
      return NextResponse.json(
        { code: "INVALID_TECHSTACK", message: "Tech stack must be an array" },
        { status: 400 }
      )
    }

    if (techstack.length > 10) {
      return NextResponse.json(
        { code: "TECHSTACK_LIMIT", message: "Too many tech stack items" },
        { status: 400 }
      )
    }



    let baseSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
    if (!baseSlug) {
      return NextResponse.json(
        { code: 'INVALID_TITLE', message: "Invalid title" },
        { status: 400 }
      )
    }

    let slug = baseSlug
    let count = 1
    while (await Project.exists({ slug })) {
      slug = `${baseSlug}-${++count}`
    }

    if (github && !github.startsWith("http")) {
      return NextResponse.json(
        { code: "INVALID_GITHUB_URL", message: "Invalid GitHub URL" },
        { status: 400 }
      )
    }
    if (live && !live.startsWith("http")) {
      return NextResponse.json(
        { code: "INVALID_LIVE_URL", message: "Invalid Live URL" },
        { status: 400 }
      )
    }

    let thumbnailUrl = null

    if (thumbnail instanceof File) {
      if (!thumbnail.type.startsWith("image/")) {
        return NextResponse.json(
          { code: "INVALID_THUMBNAIL_TYPE", message: "Invalid thumbnail type" },
          { status: 400 }
        )
      }
      const bytes = await thumbnail.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const upload = await imagekit.upload({
        file: buffer,
        fileName: `project-thumbnail-${Date.now()}`,
        folder: "/Portfolio/Project_Thumbnails",
      })

      thumbnailUrl = upload.url
    }

    const newProject = await Project.create({
      title,
      desc,
      github,
      live,
      slug,
      techStack:techstack,
      featured,
      latest,
      content,
      thumbnail: thumbnailUrl
    })

    return NextResponse.json(
      {
        message: "Project created successfully",
        data: newProject,
      },
      { status: 201 }
    )

  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json(
        { message: "Project with this title already exists" },
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
    console.log(error)
    return NextResponse.json({ message: "Server error" }, { status: 500 })

  }
}
