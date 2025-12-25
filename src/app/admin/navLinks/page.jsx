import AddBtn from "@/components/btn/add-btn"
import DeleteBtn from "@/components/btn/delete-btn"
import EditBtn from "@/components/btn/edit-btn"
import Header from "@/components/general/header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { connectDB } from "@/lib/db"
import navlinkModel from "@/model/navlink.model"

// make this page workable with all functionality: delete, edit(input box in table-cell), add(dialog box)

const NavLinks = async () => {
  await connectDB()
  const links = await navlinkModel.find({}).lean()
  return (
    <main>
      <div className='flex justify-between items-center mt-2'>
        <Header>Navlinks</Header>
        <AddBtn />
      </div>
      <Table className={"mt-2"}>
        <TableHeader>
          <TableRow>
            <TableHead className={"w-10"}>Sr</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>href</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {links.map((i, index) => {
            return (
              <TableRow key={i.name}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{i.name}</TableCell>
                <TableCell>{i.link}</TableCell>
                <TableCell>
                  <EditBtn />
                  <DeleteBtn />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </main>
  )
}

export default NavLinks
