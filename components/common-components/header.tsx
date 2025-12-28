import { Compass, Home } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Logo from "./logo";
import AuthButtons from "../authbuttons/authlayout";

export default function Header() {

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
      <AuthButtons />
    </div>
  );
}
