import Container from "@/components/general/container";
import PublicRoute from "@/components/routes/public-route";
import Hero from "@/components/sections/hero";
import Project from "@/components/sections/project";
import TechStack from "@/components/sections/techStack";

export const metadata = {
  title: "Full-Stack Web Developer | Portfolio",
  description:
    "Full-stack web developer portfolio showcasing projects, tech stack, and experience with modern web technologies.",
  keywords: [
    "full stack developer",
    "frontend developer",
    "web developer",
    "Next.js portfolio",
    "JavaScript developer",
  ],
  openGraph: {
    title: "Full-Stack Web Developer Portfolio",
    description:
      "Portfolio showcasing projects, skills, and tech stack.",
    url: "https://yourdomain.com",
    siteName: "Your Name",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Portfolio Preview",
      },
    ],
    type: "website",
  },
}

export default async function Home() {

  return (
    <Container>
      <PublicRoute>
        <Hero />
        <Project />
        <TechStack />
      </PublicRoute>
    </Container>
  );
}
