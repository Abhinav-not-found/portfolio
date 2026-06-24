import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { Button } from "../ui/button"
import NavLinks from "./nav-links"
import Logo from "./logo"

const SheetMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant='ghost'>
          <Menu className='size-4' />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <div className='p-8'>
          <Logo />
          <NavLinks />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SheetMenu
