"use client";
import FeaturedProductsSection from "./componants/featured_section";
import HeroSectionCarousel from "./componants/hero_section";
import NewsletterSection from "./componants/newsletter_section";
import RewardsSection from "./componants/rewards_section";
import WhyUsSection from "./componants/why_us_section";
import NewArrivalsSection from "./componants/new_arrivals_section";
import SummerCollectionSection from "./componants/summer_collection_section";
import Footer from "@/components/footer";

export default function DashboardPage() {
  interface Product {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    description?: string;
    isNew?: boolean;
  }

  const sampleProducts: Product[] = [
    {
      id: "1",
      name: "Stylish Cotton T-Shirt",
      price: 29.99,
      imageUrl: "https://placehold.co/300x375/f0abfc/0c0a09?text=T-Shirt",
      description:
        "Comfortable and stylish cotton t-shirt, perfect for casual wear.",
      isNew: true,
    },
    {
      id: "2",
      name: "Classic Fit Denim Jeans",
      price: 59.5,
      imageUrl: "https://placehold.co/300x375/a78bfa/0c0a09?text=Jeans",
      description:
        "Durable denim jeans with a classic fit for everyday comfort.",
      isNew: true,
    },
    {
      id: "3",
      name: "Lightweight Summer Dress",
      price: 45.0,
      imageUrl: "https://placehold.co/300x375/f0abfc/0c0a09?text=Dress",
      description: "A light and breathable dress ideal for warm summer days.",
      isNew: true,
    },
    {
      id: "4",
      name: "Modern Running Sneakers",
      price: 75.99,
      imageUrl: "https://placehold.co/300x375/a78bfa/0c0a09?text=Sneakers",
      description:
        "Comfortable and trendy sneakers designed for running and casual use.",
    },
    {
      id: "5",
      name: "Summer Beach Hat",
      price: 25.0,
      imageUrl: "https://placehold.co/300x375/f0abfc/0c0a09?text=Hat",
      description:
        "Stylish summer hat perfect for beach days and outdoor activities.",
      isNew: true,
    },
    {
      id: "6",
      name: "Light Linen Shirt",
      price: 35.0,
      imageUrl: "https://placehold.co/300x375/a78bfa/0c0a09?text=Shirt",
      description: "A lightweight linen shirt perfect for summer comfort.",
    },
    {
      id: "7",
      name: "Designer Sunglasses",
      price: 89.99,
      imageUrl: "https://placehold.co/300x375/f0abfc/0c0a09?text=Sunglasses",
      description: "Stylish UV protection sunglasses with modern design.",
      isNew: true,
    },
    {
      id: "8",
      name: "Summer Sandals",
      price: 45.0,
      imageUrl: "https://placehold.co/300x375/a78bfa/0c0a09?text=Sandals",
      description: "Comfortable summer sandals for beach and casual wear.",
      isNew: true,
    },
  ];

  return (
    <>
      <HeroSectionCarousel />
      <FeaturedProductsSection products={sampleProducts} />
      <WhyUsSection />
      <NewArrivalsSection products={sampleProducts} />
      <RewardsSection />
      <SummerCollectionSection products={sampleProducts} />
      <NewsletterSection />
      <Footer />
    </>
  );
}
