import DescriptionCell from "@/app/admin/projects/description-cell";
import CreateProjectBtn from "@/components/btn/create-project-btn";
import ProjectCard from "@/components/card/project-card";
import { BigHeading, Heading } from "@/components/general/heading";
import ProjectToggle from "@/components/projects/project-toggle";
import PrivateRoute from "@/components/routes/private-route";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getAllProjects } from "@/helper/server/project/get-all-projects";
import { PenBox, Trash2 } from "lucide-react";
import Link from "next/link";

const AdminProject = async () => {
  const data = await getAllProjects();

  return (
    <PrivateRoute>
      <div className="flex justify-between items-center">
        <Heading>
          <BigHeading>Project</BigHeading>Management
        </Heading>
        <CreateProjectBtn />
      </div>

      {/* <div className="mt-5 grid grid-cols-2 gap-y-5">
        {data.map((item, index) => {
          // console.log(item);
          return <ProjectCard key={index} data={item} />;
        })}
      </div> */}

      <Table className={"mt-10"}>
        <TableHeader>
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead className="">Description</TableHead>
            <TableHead className="">Deployed</TableHead>
            <TableHead className="">Github</TableHead>
            <TableHead className="">Featured</TableHead>
            <TableHead className="">Latest</TableHead>
            <TableHead className="">Visible</TableHead>
            <TableHead className="text-center">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((item, index) => {
            console.log(item);
            return (
              <TableRow key={index}>
                <TableCell className="font-medium underline">
                  <Link href={`/projects/${item.slug}`}>{item.title}</Link>
                </TableCell>
                <TableCell className="font-medium">
                  <DescriptionCell description={item.desc} />
                </TableCell>
                <TableCell className="font-medium underline cursor-pointer">
                  <Link href={item.live} target="_blank">
                    Link
                  </Link>
                </TableCell>
                <TableCell className="font-medium underline cursor-pointer">
                  <Link href={item.github} target="_blank">
                    Link
                  </Link>
                </TableCell>
                <TableCell className="font-medium">
                  <ProjectToggle
                    projectId={String(item._id)}
                    field="featured"
                    initialValue={item.featured ?? false}
                    label="Featured"
                  />
                </TableCell>
                <TableCell>
                  <ProjectToggle
                    projectId={String(item._id)}
                    field="latest"
                    initialValue={item.latest ?? false}
                    label="Latest"
                  />
                </TableCell>
                <TableCell>
                  <ProjectToggle
                    projectId={String(item._id)}
                    field="visible"
                    initialValue={item.visible ?? false}
                    label="Visibility"
                  />
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/projects/${item.slug}/edit`}>
                    <Button size="icon" variant="ghost">
                      <PenBox />
                    </Button>
                  </Link>
                  <Button size="icon" variant="ghost">
                    <Trash2 />
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </PrivateRoute>
  );
};

export default AdminProject;
