import NpmCard from "@/components/card/npm-card"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"

const data = [
  {
    title: "@ak-mern/backend",
    slug: "@ak-mern/backend",
    desc: "a cli to generate node express backend boilerplate with completed jwt auth",
    badge: ["node", "express", "backend"],
  },
  {
    title: "@ak-mern/fullstack",
    slug: "@ak-mern/fullstack",
    desc: "a cli to generate fullstack (MERN) boilerplate setup",
    badge: ["node", "express", "backend", "react", "frontend"],
  },
  {
    title: "@ak-mern/vite",
    slug: "@ak-mern/vite",
    desc: "a cli to generate vite boilerplate setup",
    badge: ["react", "frontend"],
  },
  {
    title: "@ak-mern/backend-start",
    slug: "@ak-mern/backend-start",
    desc: "a cli to generate backend boilerplate setup, everything is empty to start from scratch.",
    badge: ["node", "express", "backend"],
  },
  {
    title: "@ak-mern/jwt",
    slug: "@ak-mern/jwt",
    desc: "Generate secure JWT secrets instantly from your terminal.",
    badge: ["node", "express", "backend", "jsonwebtoken", "crypto"],
  },
]

const page = () => {
  return (
    <PublicRoute className={"mt-18 min-h-screen px-4 md:px-0"}>
      <Header>NPM</Header>
      <div className='mt-4 flex flex-col space-y-10'>
        {data.map((d) => {
          return <NpmCard key={d.title} data={d} />
        })}
      </div>
    </PublicRoute>
  )
}

export default page
