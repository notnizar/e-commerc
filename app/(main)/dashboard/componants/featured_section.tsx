import React from 'react'; // Import React
import ProductSection from '@/components/cards/product_section';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  isNew?: boolean;
}

const FeaturedProductsSection: React.FC<{ products: Product[] }> = ({ products }) => {
  return (
    <ProductSection
      products={products}
      title="Featured Products"
      subtitle="Our curated selection of must-have items"
      seeAllLink="/shop"
      theme="default"
    />
  );
};

export default FeaturedProductsSection;
