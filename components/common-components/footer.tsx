import { ExternalLink, ShieldUserIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="p-20 bg-gray-300 font-outfit text-lg">
      <p>iBuiltthis - developed by Rahul Gautam for demonstration only</p>
      <Link href={"/admin"}>
        <p className="flex flex-nowrap underline items-center mt-2 gap-1 animation_popup_style"><ShieldUserIcon/> Check admin panel here <ExternalLink/></p>
      </Link>
    </section>
  );
}
