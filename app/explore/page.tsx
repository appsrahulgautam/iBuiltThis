"use client";

import Empty from "@/components/common-components/empty";
import ProductCard from "@/components/common-components/products-card";
import SectionHeader from "@/components/common-components/sectionheader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getAllProductswithFilteration } from "@/lib/cruds";

import {
  Box,
  CloudDownloadIcon,
  Compass,
  History,
  Loader,
  ReceiptIcon,
  Search,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";

export default function ExplorePage() {
  const trending = "Trending";
  const recentlylaunched = "Recent";

  const [loading, setLoadingState] = useState(true);
  const [filterBy, setFilterBy] = useState(trending);
  const [productsList, setProductsList] = useState<any[] | null>(null);

  const fetchproducts = async (searchText: string) => {
    setLoadingState(true);

    const { productslist } = await getAllProductswithFilteration({
      searchText: searchText.trim(),
      filterBy: filterBy,
    });

    setProductsList(productslist);
    setLoadingState(false);
  };

  const handleTrendingClick = async () => {
    setFilterBy(trending);
  };
  const handleRecentlyClick = async () => {
    setFilterBy(recentlylaunched);
  };

  ///todo lets load the function first
  useEffect(() => {
    fetchproducts("");
  }, []);

  return (
    <section>
      <div className="wrapper font-outfit">
        <SectionHeader
          description="Browse and discover amazing projects from our community"
          icon={Compass}
          title="Explore All Products"
          showViewAll={false}
        />
        <div className="flex flex-col sm:flex-row gap-4 my-10">
          <div className="w-full relative">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
              size={20}
            />
            <Input
              className="pl-10"
              placeholder="Search..."
              onChange={(e) => fetchproducts(e.target.value)}
            />
          </div>
          <div className="flex justify-center flex-row gap-4">
            {filterBy == trending ? (
              <Button className="flex-1" variant={"default"}>
                <TrendingUp /> Trending
              </Button>
            ) : (
              <Button
                onClick={handleTrendingClick}
                className="flex-1"
                variant={"outline"}
              >
                <TrendingUp /> Trending
              </Button>
            )}
            {filterBy == recentlylaunched ? (
              <Button className="flex-1" variant={"default"}>
                <History /> Recent
              </Button>
            ) : (
              <Button
                onClick={handleRecentlyClick}
                className="flex-1"
                variant={"outline"}
              >
                <History /> Recent
              </Button>
            )}
          </div>
        </div>

        {productsList != null && productsList?.length > 0 ? (
          <div className="my-10">
            <p>Total {productsList.length} products found</p>
            <div className="grid-wrapper columns-3 mt-10">
              {productsList.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : loading == true ? (
          <Empty title="Laoding all products..." icon={Loader} />
        ) : (
          <Empty title="No results found for your search" icon={Box} />
        )}
      </div>
    </section>
  );
}
