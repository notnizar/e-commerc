import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio"; 
import { Button } from "@/components/ui/button"; 

interface Category {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
  link?: string; 
}

const CategoryCard: React.FC<{ category: Category }> = ({ category }) => {
  const handleClick = () => {
    if (category.link) {
      window.location.href = category.link; 
    }
  };

  return (
    <div
      className="relative w-full rounded-lg overflow-hidden shadow-lg hover:shadow-xl group cursor-pointer"
      onClick={handleClick}
      style={{ minHeight: '200px' }}
    >
      {/* Category Image as Background/Prominent Feature */}
      <AspectRatio ratio={3 / 2}> {/* Adjusted aspect ratio */}
        <img
          src={category.imageUrl || `https://placehold.co/450x300/e2e8f0/0f172a?text=${encodeURIComponent(category.name)}`}
          alt={category.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" // Scale effect on hover
          // Add an onerror handler as a fallback
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // Prevent infinite loop
            target.src = `https://placehold.co/450x300/e2e8f0/0f172a?text=Image+Not+Found`;
          }}
        />
      </AspectRatio>

      {/* Overlay for text and potential button */}
      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300 flex flex-col justify-end p-4 text-white">
        {/* Category Name */}
        <h3 className="text-lg md:text-xl font-bold mb-1 text-balance">
          {category.name}
        </h3>
        {category.description && (
          <p className="text-sm mb-3 line-clamp-2">
            {category.description}
          </p>
        )}

        {category.link && (
           <Button variant="secondary" size="sm" className="mt-2 self-start">View Collection</Button>
        )}
      </div>
    </div>
  );
};

export default CategoryCard;
