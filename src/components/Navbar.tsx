import { SignOutButton } from "@clerk/nextjs"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button, buttonVariants } from "./ui/button"
import { Separator } from "./ui/separator"
import { currentUser } from "@clerk/nextjs/server"
const Navbar = async () => {
  const user = await currentUser()
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href={"/"} className="flex z-40 font-semibold">
            <span className="text-brand-700">Ping</span>Pro
          </Link>
          <div className="h-full flex items-center space-x-4">
            {user ? (
              <>
                <SignOutButton>
                  <Button variant={"ghost"}>Sign out</Button>
                </SignOutButton>
                <Link
                  href={"/dashboard"}
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                >
                  Dashboard <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </>
            ) : (
              <>
                <Link
                  href={"/pricing"}
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                    variant : "ghost"
                  })}
                >
                  Pricing
                </Link>
                <Link
                  href={"/sign-in"}
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                    variant : "ghost"
                  })}
                >
                  Sign in
                </Link>
                  <Separator orientation="vertical" className="h-9" />
                <Link
                  href={"/sign-up"}
                  className={buttonVariants({
                    size: "sm",
                    className: "flex items-center gap-1",
                  })}
                >
                  Sign up <ArrowRight className="ml-1.5 w-4 h-4" />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
