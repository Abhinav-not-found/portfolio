import BlocksContent from "@/components/blocks/blocks-content"
import Header from "@/components/general/header"
import PublicRoute from "@/components/routes/public-route"

const page = () => {
  return (
    <PublicRoute className={"mt-18 h-screen"}>
      <Header>Blocks</Header>
      <BlocksContent />
    </PublicRoute>
  )
}

export default page
