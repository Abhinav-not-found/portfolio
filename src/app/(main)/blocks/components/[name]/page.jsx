import BtnGrp from "@/components/btn/btn-grp"
import Header from "@/components/general/header"

const page = async ({ params }) => {
  const param = await params
  console.log(param.name)
  return (
    <main className='mt-20'>
      <Header variant='v2' title={param.name} description={"description"} />
      <BtnGrp />
    </main>
  )
}

export default page
