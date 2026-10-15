import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import Project from "@/model/project.model";
import { uploadImage } from "@/helper/extra/upload-image";
import mongoose from "mongoose";

export async function PUT(req, { params }) {
  const param = await params;

  try {
    await connectDB();

    const formData = await req.formData();

    const title = formData.get("title");
    const desc = formData.get("desc");
    const content = formData.get("content");
    const github = formData.get("github");
    const live = formData.get("live");
    const featured = formData.get("featured") === "true";
    const latest = formData.get("latest") === "true";
    const visible = formData.get("visible") === "true";

    const techstack = formData.getAll("techstack");
    const file = formData.get("thumbnail");

    const project = await Project.findById(param.id);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    let thumbnailPath = project.thumbnail;

    // If new thumbnail uploaded
    if (file && file.size > 0) {
      const uploadedUrl = await uploadImage(file);
      thumbnailPath = uploadedUrl;
    }

    project.title = title;
    project.desc = desc;
    project.content = content;
    project.github = github;
    project.live = live;
    project.techStack = techstack;
    project.thumbnail = thumbnailPath;
    project.featured = featured;
    project.latest = latest;
    project.visible = visible;

    console.log("testing>", project.techStack);

    await project.save();

    return NextResponse.json({
      message: "Project updated successfully",
      slug: project.slug,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 },
    );
  }
}

const allowedFields = ["featured", "latest", "visible"];

export async function PATCH(request, { params }) {
  try {
    // IMPORTANT: Authenticate and authorize the admin here.
    // PrivateRoute protects the UI, not this API endpoint.

    const { id } = await params;

    if (!mongoose.isValidObjectId(id)) {
      return NextResponse.json(
        { message: "Invalid project ID" },
        { status: 400 },
      );
    }

    const body = await request.json();
    const { field, value } = body;

    if (!allowedFields.includes(field) || typeof value !== "boolean") {
      return NextResponse.json(
        { message: "Invalid field or value" },
        { status: 400 },
      );
    }

    await connectDB();

    const project = await Project.findByIdAndUpdate(
      id,
      { $set: { [field]: value } },
      { returnDocument: "after", runValidators: true },
    ).lean();

    console.log(project);

    if (!project) {
      return NextResponse.json(
        { message: "Project not found" },
        { status: 404 },
      );
    }

    return NextResponse.json({
      message: "Project updated",
      field,
      value,
    });
  } catch (error) {
    console.error("Failed to update project:", error);

    return NextResponse.json(
      { message: "Failed to update project" },
      { status: 500 },
    );
  }
}
