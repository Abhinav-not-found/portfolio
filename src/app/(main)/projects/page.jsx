import React from "react";
import Header from "@/components/general/header";
import PublicRoute from "@/components/routes/public-route";
import ProjectsList from "@/components/projects/project-list";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { getAllProjects } from "@/helper/server/project/get-all-projects";
import { projectsQueryKey } from "@/hooks/project.hook";

const page = async () => {
  const queryClient = new QueryClient();

  const projects = await getAllProjects({ visible: true });

  const serializableProjects = JSON.parse(JSON.stringify(projects));

  queryClient.setQueryData(projectsQueryKey, serializableProjects);
  return (
    <PublicRoute className={"mt-18 min-h-screen"}>
      <Header>Projects</Header>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <ProjectsList />
      </HydrationBoundary>
    </PublicRoute>
  );
};

export default page;

export const metadata = {
  title: "Projects - Abhinav Kumar",
  description:
    "A curated list of projects built with Next.js, React, Node.js, and MongoDB.",
  keywords: [
    "projects",
    "web development",
    "javascript",
    "next.js",
    "node.js",
    "programming",
  ],
  openGraph: {
    title: "Projects - Abhinav Kumar",
    description:
      "A curated list of projects built with Next.js, React, Node.js, and MongoDB.",
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects - Abhinav Kumar",
    description:
      "A curated list of projects built with Next.js, React, Node.js, and MongoDB.",
  },
};
