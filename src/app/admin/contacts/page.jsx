import DeleteMsgBtn from "@/components/btn/delete-msg-btn"
import Header from "@/components/general/header"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { getContacts } from "@/helper/server/contact/contact-server.helper"

const AdminContact = async () => {
  const data = await getContacts()
  return (
    <main>
      <Header>Contact Submissions</Header>
      <Table className={"mt-4"}>
        <TableHeader>
          <TableRow>
            <TableHead className={"w-10"}>Sr</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead className={"w-max"}>Message</TableHead>
            <TableHead className={"w-max"}>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length > 0 ? (
            data.map((i, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{i.name}</TableCell>
                  <TableCell className={"text-muted-foreground"}>
                    {i.email}
                  </TableCell>
                  <TableCell>{i.message}</TableCell>
                  <TableCell>
                    <DeleteMsgBtn data={i} />
                  </TableCell>
                </TableRow>
              )
            })
          ) : (
            <TableRow>
              <TableCell
                colSpan={5}
                className='text-center text-muted-foreground'
              >
                No Submissions Yet
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </main>
  )
}

export default AdminContact
