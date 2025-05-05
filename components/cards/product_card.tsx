import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart, Heart } from "lucide-react";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl: string;
  discount?: number;
  rating?: number;
  isNew?: boolean;
}

export function ProductCard({ title, price, imageUrl, discount, isNew }: ProductCardProps) {
  const discountedPrice = discount ? price - (price * discount) / 100 : price;

  return (
    <Card className="group relative overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary/50 transition-all duration-300">
      <CardContent className="p-0 relative aspect-square">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {(discount || isNew) && (
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {discount && (
              <Badge variant="destructive" className="text-xs">
                -{discount}%
              </Badge>
            )}
            {isNew && (
              <Badge variant="default" className="bg-green-600 text-xs">
                New
              </Badge>
            )}
          </div>
        )}
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className="h-4 w-4" />
        </Button>
      </CardContent>
      
      <CardHeader className="p-3 space-y-1.5">
        <h3 className="font-medium text-sm line-clamp-1">{title}</h3>
        <div className="flex items-baseline gap-2">
          <span className="text-base font-semibold">${discountedPrice.toFixed(2)}</span>
          {discount && (
            <span className="text-sm text-muted-foreground line-through">
              ${price.toFixed(2)}
            </span>
          )}
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
