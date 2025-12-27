import FeaturedSection from "@/components/landingpage/featured";
import HeroSection from "@/components/landingpage/herosection";
import RecentlyLaunched from "@/components/landingpage/recentlylaunched";
import FeaturedSectionSkeleton from "@/components/skeletons/featuredskeletons";
import { Suspense } from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />

      <Suspense fallback={<FeaturedSectionSkeleton />}>
        <FeaturedSection />
      </Suspense>

      <Suspense fallback={<FeaturedSectionSkeleton />}>
        <RecentlyLaunched />
      </Suspense>
    </div>
  );
}
