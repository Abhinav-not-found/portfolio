import { notFound } from "next/navigation"
import { components } from "../components"
import ComponentShowcase from "@/components/quickUI/ComponentsShowcase"

export default async function Page({ params }) {
  const { name } = await params

  const item = components[name]

  if (!item) {
    notFound()
  }

  return (
    <div className='container mx-auto'>
      <ComponentShowcase title={item.title} code={item.code}>
        {item.component}
      </ComponentShowcase>
    </div>
  )
}
