import { Compass, Home, Navigation, SparkleIcon, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
} from "@clerk/nextjs";
import { Suspense, useState } from "react";
import { auth } from "@clerk/nextjs/server";

export default function Header() {
  const [loginstatus, setLoginstatus] = useState(false);
  const getLoginStatus = async () => {
    const { userId } = await auth();
    if (!userId) {
      setLoginstatus(false);
    } else {
      setLoginstatus(true);
    }
  };

  getLoginStatus();

  return (
    <div className="flex flex-row  font-outfit p-4 sticky top-0 z-100 bg-ba ckground/50 backdrop-blur justify-between items-center">
      <Logo />
      <div className="tracking-wide">
        <Link href={"/"}>
          <Button className="hover:bg-gray-400" variant={"ghost"}>
            <Home /> <span className="hidden sm:block">Home</span>
          </Button>
        </Link>
        <Link href={"/explore"}>
          <Button className="hover:bg-gray-400" variant={"ghost"}>
            <Compass /> <span className="hidden sm:block">Explore</span>
          </Button>
        </Link>
      </div>
      {/* //TODO CHECK IF USER SIGNED IN */}
      {loginstatus ? (
        <Suspense fallback={<div>Laoding...</div>}>
          <div className="flex justify-center items-center gap-4">
            <SignedIn>
              <Link href={"/submit"}>
                <Button
                  className="animation_popup_style hover:bg-primary"
                  variant={"default"}
                >
                  <Sparkles /> Submit Project
                </Button>
              </Link>
              <UserButton />
            </SignedIn>
          </div>
        </Suspense>
      ) : (
        <Suspense fallback={<div>Loading..</div>}>
          <div>
            <SignedOut>
              <SignInButton>
                <button className="hover:bg-primary/50 text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-primary hover:bg-primary text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
            </SignedOut>
          </div>
        </Suspense>
      )}
    </div>
  );
}
