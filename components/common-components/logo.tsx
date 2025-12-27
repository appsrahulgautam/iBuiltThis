import { Sparkles } from "lucide-react";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex flex-row justify-center items-center gap-2 text-xl px-4">
        <Sparkles className="text-white bg-primary size-8 p-1 rounded-lg" />
        <h1 className="hidden sm:block font-bold tracking-widest">
          <span>i</span>
          <span className="text-primary">Built</span>
          <span>this</span>
        </h1>
      </div>
    </Link>
  );
}
