import React, { useRef, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from './product_card';

// Define types
interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  isNew?: boolean;
}

interface ProductSectionProps {
  products: Product[];
  title: string;
  subtitle?: string;
  seeAllLink?: string;
  theme?: 'default' | 'summer' | 'winter' | 'sale';
}

const ProductSection: React.FC<ProductSectionProps> = ({ 
  products,
  title,
  subtitle,
  seeAllLink = '#',
  theme = 'default'
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Function to check scroll position
  const checkScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 1);
    }
  };

  // Scroll function
  const scroll = (scrollOffset: number) => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  // Add scroll event listener
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkScroll);
      }
    };
  }, [products]);

  // Theme-specific styles
  const getThemeStyles = () => {
    switch (theme) {
      case 'summer':
        return 'bg-gradient-to-r from-orange-50 to-yellow-50 dark:from-orange-950/20 dark:to-yellow-950/20';
      case 'winter':
        return 'bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20';
      case 'sale':
        return 'bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-950/20 dark:to-pink-950/20';
      default:
        return 'bg-gray-50 dark:bg-gray-950';
    }
  };

  return (
    <section className={`py-8 md:py-12 lg:py-16 relative ${getThemeStyles()}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-2 text-muted-foreground">
                {subtitle}
              </p>
            )}
          </div>
          <Button
            variant="outline"
            className="mt-4 md:mt-0 text-sm md:text-base"
            asChild
          >
            <a href={seeAllLink}>See All</a>
          </Button>
        </div>

        {/* Products Scroll Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-6 pb-4 hide-scrollbar"
        >
          {products.map(product => (
            <div key={product.id} className="min-w-[280px] sm:min-w-[300px]">
              <ProductCard
                title={product.name}
                price={product.price}
                imageUrl={product.imageUrl}
                isNew={product.isNew}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 left-2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md"
        onClick={() => scroll(-300)}
        disabled={!canScrollLeft}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute top-1/2 right-2 transform -translate-y-1/2 z-10 bg-white/80 dark:bg-gray-800/80 rounded-full shadow-md"
        onClick={() => scroll(300)}
        disabled={!canScrollRight}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Hide scrollbar styles */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default ProductSection;