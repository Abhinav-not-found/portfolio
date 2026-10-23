import ProjectForm from "@/components/form/create-project-form";
import { getProjectBySlug } from "@/helper/server/project/get-project-by-slug";
import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

const page = async ({ params }) => {
  const param = await params;
  const data = await getProjectBySlug(param.name);

  console.log(data);

  if (!data) notFound();

  const cookieStore = await cookies();
  const token = cookieStore.get("token");
  if (!token) {
    redirect("/");
  }

  return (
    <main className="mt-18">
      <h1 className="text-4xl font-bold mb-6">Edit Project</h1>

      <ProjectForm
        mode="edit"
        initialData={{
          id: data._id.toString(),
          title: data.title,
          desc: data.desc,
          content: data.content,
          thumbnail: data.thumbnail,
          github: data.github,
          live: data.live,
          featured: data.featured,
          latest: data.latest,
          techStack: data.techStack ?? [],
        }}
      />
    </main>
  );
};

export default page;
