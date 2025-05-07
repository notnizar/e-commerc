"use client";
import { useEffect, useState } from "react";
import { Product, getProducts } from "@/lib/services/products";
import FeaturedProductsSection from "./componants/featured_section";
import HeroSectionCarousel from "./componants/hero_section";
import NewsletterSection from "./componants/newsletter_section";
import RewardsSection from "./componants/rewards_section";
import WhyUsSection from "./componants/why_us_section";
import NewArrivalsSection from "./componants/new_arrivals_section";
import SummerCollectionSection from "./componants/summer_collection_section";
import Footer from "@/components/footer";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load products');
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return (
      <div className="space-y-8 p-4">
        <Skeleton className="h-[600px] w-full" /> {/* Hero section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <Skeleton key={i} className="h-[350px] w-full" />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center p-8 text-red-500">{error}</div>;
  }

  return (
    <>
      <HeroSectionCarousel />
      <FeaturedProductsSection products={products.filter(p => p.is_featured)} />
      <WhyUsSection />
      <NewArrivalsSection products={products.filter(p => p.is_new)} />
      <RewardsSection />
      <SummerCollectionSection products={products.filter(p => p.is_featured)} />
      <NewsletterSection />
      <Footer />
    </>
  );
}
