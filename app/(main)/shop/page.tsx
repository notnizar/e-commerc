import React from 'react';
import FilterBar from "./components/FilterBar";
import { ProductCard } from "@/components/cards/product_card";

// Sample products data (you should replace this with actual data from your backend)
const products = [
  {
    id: "1",
    title: "Stylish Cotton T-Shirt",
    price: 29.99,
    imageUrl: "https://placehold.co/300x375/f0abfc/0c0a09?text=T-Shirt",
    isNew: true
  },
  {
    id: "2",
    title: "Classic Fit Denim Jeans",
    price: 59.50,
    imageUrl: "https://placehold.co/300x375/a78bfa/0c0a09?text=Jeans",
    discount: 10
  },
  {
    id: "3",
    title: "Summer Dress",
    price: 45.00,
    imageUrl: "https://placehold.co/300x375/f0abfc/0c0a09?text=Dress",
    isNew: true
  },
  {
    id: "4",
    title: "Running Sneakers",
    price: 75.99,
    imageUrl: "https://placehold.co/300x375/a78bfa/0c0a09?text=Sneakers",
    discount: 15
  }
];

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col space-y-6">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-lg text-gray-600">Discover our curated collection of premium products</p>
          </div>

          {/* Filter Bar */}
          <FilterBar />

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                price={product.price}
                imageUrl={product.imageUrl}
                discount={product.discount}
                isNew={product.isNew}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}