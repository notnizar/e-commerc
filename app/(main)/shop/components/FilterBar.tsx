import React from "react";
import { Button } from "@/components/ui/button";
import { SlidersHorizontal } from "lucide-react";

export default function FilterBar() {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-4">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Categories */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Category</label>
          <select className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary">
            <option value="">All Categories</option>
            <option value="clothing">Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
            <option value="shoes">Shoes</option>
            <option value="jewelry">Jewelry</option>
          </select>
        </div>

        {/* Price Range */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Price Range</label>
          <select className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary">
            <option value="">Any Price</option>
            <option value="0-50">$0 - $50</option>
            <option value="51-100">$51 - $100</option>
            <option value="101-200">$101 - $200</option>
            <option value="201-500">$201 - $500</option>
            <option value="501+">$501+</option>
          </select>
        </div>

        {/* Sort By */}
        <div className="flex-1">
          <label className="block text-sm font-medium mb-2">Sort By</label>
          <select className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-primary focus:border-primary">
            <option value="newest">Newest First</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {/* Additional Filters Button */}
        <div className="flex items-end">
          <Button variant="outline" className="w-full lg:w-auto">
            <SlidersHorizontal className="w-4 h-4 mr-2" />
            More Filters
          </Button>
        </div>
      </div>
    </div>
  );
}
