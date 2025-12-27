export default function FeaturedSectionSkeleton() {
  return (
    <section className="relative bg-[#E8E5D5] animate-pulse">
      <div className="wrapper">
        {/* Skeleton for Section Header */}
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
          <div className="flex-1">
            <div className="h-4 bg-gray-300 rounded w-1/3"></div>
            <div className="h-3 bg-gray-300 rounded w-1/2 mt-2"></div>
          </div>
        </div>

        {/* Skeleton for Product Cards */}
        <div className="grid-wrapper columns-3 mt-10 gap-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="p-4 bg-gray-300 rounded-lg h-40 w-full"
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
