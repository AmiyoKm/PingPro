"use client"
import { SignUp } from "@clerk/nextjs"

const page = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center">
      <SignUp fallbackRedirectUrl={"/welcome"} forceRedirectUrl={"/welcome"} />
    </div>
  )
}

export default page
