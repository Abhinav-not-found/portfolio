const Page = async ({ params }) => {
  const { slug } = await params

  const test = decodeURIComponent(slug)
  return <div className='mt-18'>{test}</div>
}

export default Page
