import NpmCard from "@/components/card/npm-card"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"

const page = () => {
  return (
    <PublicRoute className={"mt-18 min-h-screen px-4 md:px-0"}>
      <Header>NPM</Header>
      <div className='mt-4 flex flex-col space-y-10'>
        <NpmCard data={{ slug: "test" }} />
      </div>
    </PublicRoute>
  )
}

export default page
