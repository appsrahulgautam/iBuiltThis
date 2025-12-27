import { Star } from "lucide-react";
import SectionHeader from "../common-components/sectionheader";
import ProductCard from "../common-components/products-card";
import { getFeaturedProducts } from "@/lib/cruds";

export default async function FeaturedSection() {
  const featuredproducts = await getFeaturedProducts();

  return (
    <section className="relative bg-[#E8E5D5]">
      <div className="wrapper">
        <SectionHeader
          title="Featured Today"
          description="Top picks from our community this week"
          icon={Star}
          showViewAll={true}
        />

        <div className="grid-wrapper columns-3 mt-10">
          {featuredproducts.map((product, keyloop) => (
            <ProductCard key={keyloop} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
