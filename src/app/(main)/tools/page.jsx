import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"
import Link from "next/link"

const Tools = () => {
  return (
    <PublicRoute className={"mt-18 min-h-screen px-4 md:px-0"}>
      <Header>Tools</Header>
      <div className='mt-4 flex flex-col space-y-10'>
        <L to='jwt_secret'> JWT Secret</L>
      </div>
    </PublicRoute>
  )
}

export default Tools

const L = ({ to, children }) => {
  return (
    <Link
      href={`/tools/${to}`}
      className='font-bold hover:bg-neutral-100 p-2 rounded-md w-fit'
    >
      {children}
    </Link>
  )
}
