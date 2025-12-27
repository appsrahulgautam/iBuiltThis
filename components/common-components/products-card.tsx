import { ChevronDown, ChevronUp, Star, StarIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { Badge } from "../ui/badge";

import { Card, CardAction, CardDescription, CardTitle } from "../ui/card";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import Link from "next/link";
import VoteCount from "./votecount";

///todo this is got from drizzle
type ProductDrizzleType = InferSelectModel<typeof products>;

export default function ProductCard({
  product,
}: {
  product: ProductDrizzleType;
}) {
  return (
    <Link href={"/product/" + product.id}>
      <Card className="px-6 py-10 border-black border-[0.1px] animation_popup_style font-outfit bg-[#EDE7D4]">
        <div className="flex flex-col font-outline text-foreground">
          <div className="flex flex-row flex-wrap">
            <div className="flex flex-col w-[80%] ">
              <div className="flex flex-row justify-between items-center">
                <CardTitle className="font-semibold">{product.name}</CardTitle>
                {product.voteCount > 100 && (
                  <Badge variant="default" className="rounded-full">
                    <StarIcon /> Featured
                  </Badge>
                )}
              </div>
              <div className="line-clamp-6">
                <CardDescription className="">
                  {product.description}
                </CardDescription>
              </div>
            </div>

            <VoteCount voteCount={product.voteCount} productId={product.id} />
          </div>

          <CardAction className="flex flex-wrap gap-2 text-[10px] mt-4">
            {product.tags!!.length > 0 &&
              product.tags!!.map((tag, idloop) => (
                <Badge
                  key={idloop}
                  className="text-[12px] bg-blue"
                  variant={"secondary"}
                >
                  {tag}
                </Badge>
              ))}
          </CardAction>
        </div>
      </Card>
    </Link>
  );
}
