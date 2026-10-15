import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const CreateProjectBtn = () => {
  return (
    <Link href={"/admin/projects/create"}>
      <Button>
        <Plus />
        Create
      </Button>
    </Link>
  );
};

export default CreateProjectBtn;
