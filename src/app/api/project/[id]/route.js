import { NextResponse } from "next/server"
import { connectDB } from "@/lib/db"
import Project from "@/model/project.model"
import { writeFile } from "fs/promises"
import path from "path"

export async function PUT(
  req,
  { params }
) {
  const param = await params
  
  try {
    await connectDB()

    const formData = await req.formData()

    const title = formData.get("title") 
    const desc = formData.get("desc") 
    const content = formData.get("content") 
    const github = formData.get("github") 
    const live = formData.get("live") 
    const featured = formData.get("featured") === "true"
    const latest = formData.get("latest") === "true"

    const techstack = formData.getAll("techstack") 
    const file = formData.get("thumbnail")

    const project = await Project.findById(param.id)

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 }
      )
    }

    let thumbnailPath = project.thumbnail

    // If new thumbnail uploaded
    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      const uploadDir = path.join(process.cwd(), "public/uploads")
      const fileName = `${Date.now()}-${file.name}`
      const filePath = path.join(uploadDir, fileName)

      await writeFile(filePath, buffer)

      thumbnailPath = `/uploads/${fileName}`
    }

    project.title = title
    project.desc = desc
    project.content = content
    project.github = github
    project.live = live
    project.featured = featured
    project.latest = latest
    project.techstack = techstack
    project.thumbnail = thumbnailPath

    await project.save()

    return NextResponse.json({
      message: "Project updated successfully",
      slug: project.slug,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 }
    )
  }
}
