import { ProductCard } from "@/components/cards/product_card";
import { Product } from "@/lib/services/products";
import { Button } from "@/components/ui/button";

interface SummerCollectionSectionProps {
  products: Product[];
}

export default function SummerCollectionSection({ products }: SummerCollectionSectionProps) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <section className="py-16 px-4 md:px-6 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-orange-100 text-orange-700 rounded-full text-sm mb-3">
            Summer Collection 2024
          </span>
          <h2 className="text-3xl font-bold mb-4">Hot Summer Styles</h2>
          <p className="text-muted-foreground">
            Discover our refreshing collection for the summer season
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(0, 4).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            View All Collection
          </Button>
        </div>
      </div>
    </section>
  );
}