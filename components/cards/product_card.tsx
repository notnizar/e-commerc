import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Heart, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Product } from "@/lib/services/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  if (!product) {
    return null;
  }

  const fallbackImage = "https://placehold.co/300x375/f0abfc/0c0a09?text=Product";

  return (
    <Card className="group overflow-hidden">
      <CardContent className="p-0 relative aspect-[4/5]">
        <Image
          src={product.image_url || fallbackImage}
          alt={product.name || 'Product'}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = fallbackImage;
          }}
        />
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardContent>
      
      <CardHeader className="p-3 space-y-1.5">
        <h3 className="font-medium text-sm line-clamp-1">{product.name || 'Untitled Product'}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold">
            ${(product.price || 0).toFixed(2)}
          </span>
        </div>
      </CardHeader>

      <CardFooter className="p-3 pt-0">
        <Button className="w-full h-9 text-xs" size="sm">
          <ShoppingCart className="h-4 w-4 mr-2" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
