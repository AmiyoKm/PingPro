import { cn } from "@/utils"
import { ReactNode } from "react"

interface MaxWidthProps {
    className? : string
    children : ReactNode
}

const MaxWidthWrapper = ({className , children} : MaxWidthProps) => {
  return (
    <div className={cn("h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20" , className)}>{children}</div>
  )
}

export default MaxWidthWrapper