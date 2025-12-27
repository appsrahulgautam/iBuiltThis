import AdminProductCard from "@/components/admin/admin-product-card";
import StatsCard from "@/components/admin/stats-card";
import EmptyState from "@/components/common-components/empty-state";
import SectionHeader from "@/components/common-components/sectionheader";
import { getAllProducts } from "@/lib/admin-cruds";
import { InboxIcon, ShieldIcon } from "lucide-react";

export default async function AdminPage() {

  const allProducts = await getAllProducts();
  const approvedProducts = allProducts.filter(
    (product) => product.status === "approved"
  );
  const pendingProducts = allProducts.filter(
    (product) => product.status === "pending"
  );
  const rejectedProducts = allProducts.filter(
    (product) => product.status === "rejected"
  );
  return (
    <div className="py-10">
      <div className="wrapper">
        <div className="mb-12">
          <SectionHeader
            title="Product Admin"
            icon={ShieldIcon}
            description="Review and manage submitted products"
            showViewAll={false}
          />
        </div>
        <StatsCard
          approved={approvedProducts.length}
          pending={pendingProducts.length}
          rejected={rejectedProducts.length}
          all={allProducts.length}
        />

        <section className="my-12">
          <div className="section-header-with-count">
            <h2 className="text-2xl font-bold mb-6">
              Pending Products ({pendingProducts.length})
            </h2>
          </div>
          <div className="space-y-6">
            {pendingProducts.length === 0 && (
              <EmptyState
                message="No pending products to review"
                icon={InboxIcon}
              />
            )}
            {pendingProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>

        <section className="my-12">
          <div className="section-header-with-count mb-6">
            <h2 className="text-2xl font-bold">All Products</h2>
          </div>
          <div className="space-y-4">
            {allProducts.map((product) => (
              <AdminProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
