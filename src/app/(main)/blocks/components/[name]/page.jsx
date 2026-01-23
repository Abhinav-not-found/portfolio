import CodeBlock from "@/components/blocks/code-block"
import CommandBlock from "@/components/blocks/command-block"
import BtnGrp from "@/components/btn/btn-grp"
import Header from "@/components/general/header"
import { Heading } from "@/components/general/heading"

const page = async ({ params }) => {
  const param = await params
  console.log(param.name)
  return (
    <main className='mt-20'>
      <Header variant='v2' title={param.name} description={"description"} />
      <BtnGrp />
      <div className='mt-10'>
        <Heading variant='v2'>Installation</Heading>
        <CommandBlock />
      </div>
      <div className='mt-10'>
        <Heading variant='v2'>Usage</Heading>
        <CodeBlock text='import { Button } from "@/components/ui/button"' />
        <CodeBlock text='<Button variant="outline">Button</Button>' />
      </div>
    </main>
  )
}

export default page
