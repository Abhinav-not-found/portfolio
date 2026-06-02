import Link from "next/link"

const Page = () => {
  return (
    <div className='mt-18 min-h-screen px-4 md:px-0'>
      <h1 className='text-4xl font-bold'>Quick UI</h1>

      <div className='mt-4 grid grid-cols-5 gap-y-4 '>
        <L to='/quickUI/login'> Login</L>
        <L to='/quickUI/register'> Register</L>
      </div>
    </div>
  )
}

export default Page

const L = ({ to, children }) => {
  return (
    <Link
      href={`${to}`}
      className='font-bold hover:bg-neutral-100 p-2 rounded-md w-fit'
    >
      {children}
    </Link>
  )
}
