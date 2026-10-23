import Project from "@/model/project.model";
import { connectDB } from "@/lib/db";

export const getAllProjects = async (data) => {
  await connectDB();

  return Project.find(data).lean().sort("-createdAt");
};
