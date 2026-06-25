import clsx from "clsx"
import { TriangleAlert, User } from "lucide-react"
import { twMerge } from "tailwind-merge"

const ButtonGroup = () => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex items-center gap-2'>
        <TriangleAlert className='size-4 text-amber-400' />
        <p className='text-sm text-amber-400'>
          Require package: clsx, tailwind-merge.
        </p>
      </div>
      <p>Variants:</p>
      <div className='flex gap-2'>
        <Button variant='default'>default</Button>
        <Button variant='outline'>outline</Button>
        <Button variant='ghost'>ghost</Button>
        <Button variant='disabled'>disabled</Button>
      </div>
      <p>Sizes:</p>
      <div className='flex gap-2'>
        <Button size='default'>default</Button>
        <Button size='sm'>sm</Button>
        <Button size='icon'>
          <User className='size-4' />
        </Button>
      </div>
    </div>
  )
}

const variants = {
  default: "bg-neutral-900 text-white hover:bg-neutral-700",
  ghost: "text-black hover:bg-neutral-100",
  outline: "text-black border border-neutral-400 hover:bg-neutral-100",
  disabled: "bg-neutral-400 text-white cursor-no-drop",
}
const sizes = {
  default: "py-2 px-3 text-sm",
  sm: "py-2 px-3 text-xs",
  icon: "size-10 flex items-center justify-center",
}

const Button = ({
  children,
  disabled,
  className,
  onClick,
  type = "button",
  variant = "default",
  size = "default",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={twMerge(
        clsx(
          "rounded-lg cursor-pointer active:scale-97 font-normal tracking-normal",
          variants[variant],
          sizes[size],
          className,
        ),
      )}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default ButtonGroup
