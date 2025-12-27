import Link from "next/link";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Eye, Icon, LucideIcon, Sparkles, Users } from "lucide-react";
import { Telescope } from "lucide-react";
import { Rocket } from "lucide-react";

const StatsCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) => {
  return (
    <div className="flex flex-col text-foreground font-outfit">
      <div className="flex flex-row justify-center items-center gap-3">
        <Icon className="text-primary" />
        <h2 className=" text-4xl font-bold">{title}</h2>
      </div>
      <p className="text-muted-foreground  font-light">{description}</p>
    </div>
  );
};

const LiveBadge = () => {
  return (
    <>
      <div className="relative inline-flex max-w-full">
        <Badge
          variant="outline"
          className="
          bg-muted
      relative z-10
      px-4 py-2
      border-black
      flex flex-wrap items-center
      gap-2
      max-w-full
    "
        >
          <span className="relative flex size-3 shrink-0">
            <span
              className="absolute inline-flex h-full w-full animate-ping rounded-full 
        bg-primary opacity-75"
            ></span>
            <span className="relative inline-flex size-3 rounded-full bg-primary"></span>
          </span>

          <p className="text-[10px] sm:text-[14px] leading-snug wrap-break-word">
            Join thousands of creators sharing their work
          </p>
        </Badge>
      </div>
    </>
  );
};

export default function HeroSection() {
  return (
    <section className="relative bg-linear-to-b from-background via-background to-muted">
      <div className="wrapper">
        <div className="flex flex-col items-center justify-center text-center">
          <LiveBadge />
          <h1 className="m-8 text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight max-w-5xl">
            Share What You've Built, Discover What's Launching
          </h1>
          <p className="mb-10 text-sm sm:text-lg max-w-2xl leading-relaxed text-muted-foreground">
            A community platform for creators to showcase their apps, AI tools,
            SaaS products, and creative projects. Authentic launches, real
            builders, genuine feedback.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button size={"lg"} className="px-8 shadow-2xl" asChild>
              <Link href={"/submit"}>
                <Sparkles />
                Share Your Project
              </Link>
            </Button>
            <Button
              variant={"secondary"}
              size={"lg"}
              className="px-8 shadow-2xl"
              asChild
            >
              <Link href={"/explore"}>
                Explore projects <Telescope />
              </Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-5 sm:gap-10 lg:gap-15">
            <StatsCard
              title="2.5K+"
              description="Projects Shared"
              icon={Rocket}
            />
            <div className="hidden sm:block w-[0.1px] self-stretch bg-black" />
            <StatsCard
              title="10K+"
              description="Active Creators"
              icon={Users}
            />
            <div className="hidden sm:block w-[0.1px] self-stretch bg-black" />
            <StatsCard title="50K+" description="Monthly Visitors" icon={Eye} />
          </div>
        </div>
      </div>
    </section>
  );
}
