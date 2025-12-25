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

// make this page workable with all functionality: delete, edit(input box in table-cell), add(dialog box)

const NavLinks = () => {
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
          <TableRow>
            <TableCell>1</TableCell>
            <TableCell>Projects</TableCell>
            <TableCell>/projects</TableCell>
            <TableCell>
              <EditBtn />
              <DeleteBtn />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </main>
  )
}

export default NavLinks
