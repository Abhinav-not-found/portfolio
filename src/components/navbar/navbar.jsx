import Logo from "../navbar/logo"
import NavLinks from "../navbar/nav-links"
import { ModeToggle } from "../ui/mode-toggle"

const Navbar = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white dark:bg-black">
      <div className="mx-auto flex h-16 max-w-2xl items-center justify-between px-4 md:px-0">
        <Logo />
        <div className="flex items-center gap-2">
          <NavLinks />
          <ModeToggle />
        </div>
      </div>
    </header>
  )
}

export default Navbar
