import PublicRoute from "@/components/routes/public-route";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/project";
import TechStack from "@/components/sections/techStack";

export default async function Home() {
  return (
    <PublicRoute>
      <Hero />
      <Project />
      <TechStack />
    </PublicRoute>
  );
}
