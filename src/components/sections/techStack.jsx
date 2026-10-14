"use client"
import React from "react"
import { BigHeading, Heading, SmallHeading } from "../general/heading"
import Image from "next/image"
import { techStack } from "@/lib/misc"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { useTheme } from "next-themes"

const TechStack = () => {
  return (
    <section className='mt-20 px-4 md:px-0'>
      <Heading>
        <SmallHeading>Tech</SmallHeading>
        <BigHeading>Stack</BigHeading>
      </Heading>

      <div className='grid grid-cols-7 gap-6 mt-6 select-none'>
        {techStack.map((tech) => (
          <Item key={tech.name} {...tech} />
        ))}
      </div>
    </section>
  )
}

const Item = ({ name, src, darkSrc }) => {
  const { resolvedTheme } = useTheme();

  const imageSrc =
    name === "Socket.io" && resolvedTheme === "dark"
      ? darkSrc
      : src;

  return (
    <div className="flex flex-col items-center gap-2 hover:scale-120 transition-all">
      <Tooltip>
        <TooltipTrigger>
          <Image
            src={imageSrc}
            alt={name}
            width={40}
            height={40}
            priority
          />
        </TooltipTrigger>

        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};
export default TechStack
