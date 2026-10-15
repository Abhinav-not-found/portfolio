"use client";

import ProjectCard from "@/components/card/project-card";
import ProjectCardSkeleton from "@/components/skeletons/project-card-skeleton";
import { useProjects } from "@/hooks/project.hook";

export default function ProjectsList() {
  const { data, isPending, isError, error } = useProjects();

  if (isPending) {
    return (
      <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <ProjectCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <p role="alert" className="py-8 text-center text-muted-foreground">
        {error.message || "Unable to load projects. Please try again."}
      </p>
    );
  }

  if (!data?.length) {
    return (
      <p className="py-8 text-center text-muted-foreground">
        No projects found.
      </p>
    );
  }

  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
      {data.map((item) => (
        <ProjectCard key={item._id} data={item} />
      ))}
    </div>
  );
}
