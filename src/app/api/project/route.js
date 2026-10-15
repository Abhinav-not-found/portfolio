import { NextResponse } from "next/server";
import { getAllProjects } from "@/helper/server/project/get-all-projects";

export async function GET() {
  try {
    const projects = await getAllProjects();

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Failed to fetch projects:", error);

    return NextResponse.json(
      { message: "Failed to fetch projects" },
      { status: 500 },
    );
  }
}
