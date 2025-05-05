import ProductSection from '@/components/cards/product_section';

interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  isNew?: boolean;
}

const SummerCollectionSection: React.FC<{ products: Product[] }> = ({ products }) => {
  const summerProducts = products.filter(product => 
    product.name.toLowerCase().includes('summer') || 
    product.description?.toLowerCase().includes('summer') ||
    product.name.toLowerCase().includes('light') ||
    product.description?.toLowerCase().includes('light')
  );

  return (
    <ProductSection
      products={summerProducts}
      title="Summer Collection"
      subtitle="Stay cool and stylish this season"
      seeAllLink="/shop/summer"
      theme="summer"
    />
  );
};

export default SummerCollectionSection;