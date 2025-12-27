"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { downvoteCount, upvoteCount } from "@/lib/cruds";
import { eq } from "drizzle-orm";

export default function VoteCount({
  voteCount,
  productId,
}: {
  voteCount: number;
  productId: number;
}) {
  const hasvoted = false;

  const handleUpvote = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await upvoteCount(productId, voteCount);
  };

  const handleDownvote = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    await downvoteCount(productId, voteCount);
  };

  return (
    <div className="flex flex-col w-[20%] items-center">
      <Button
        onClick={handleUpvote}
        className={cn(
          "w-8 h-8",
          hasvoted
            ? "text-gray-600 opacity-50 cursor-not-allowed"
            : "text-primary hover:text-primary"
        )}
        variant={"ghost"}
      >
        <ChevronUp />
        {""}
      </Button>
      <h2>{voteCount}</h2>
      <Button
        onClick={handleDownvote}
        className={cn(
          "w-8 h-8",
          hasvoted
            ? "text-gray-600 opacity-50 cursor-not-allowed"
            : "text-primary hover:text-primary"
        )}
        variant={"ghost"}
      >
        <ChevronDown />
        {""}
      </Button>
    </div>
  );
}
