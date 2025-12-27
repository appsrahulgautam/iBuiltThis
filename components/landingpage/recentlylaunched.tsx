import { Calendar, Rocket, Star } from "lucide-react";
import SectionHeader from "../common-components/sectionheader";
import ProductCard from "../common-components/products-card";
import Empty from "../common-components/empty";
import { getRecentlyLaunched } from "@/lib/cruds";

export default async function RecentlyLaunched() {
  const recentlylaunchedproducts = await getRecentlyLaunched();

  return (
    <section className="relative">
      <div className="wrapper">
        <SectionHeader
          title="Recently Launched"
          description="Discover the latest products from our community"
          icon={Rocket}
          showViewAll={false}
        />
        {recentlylaunchedproducts.length > 0 ? (
          <div className="grid-wrapper columns-3 mt-10">
            {recentlylaunchedproducts.map((product, keyloop) => (
              <ProductCard key={keyloop} product={product} />
            ))}
          </div>
        ) : (
          <Empty
            icon={Calendar}
            title="No product was launched last week. Check back again for recently launched products here."
          />
        )}
      </div>
    </section>
  );
}
