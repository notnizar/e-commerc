import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Package, Truck, CreditCard, RefreshCw } from "lucide-react";

const features = [
  {
    icon: <Package className="w-10 h-10 text-primary" />,
    title: "Premium Quality",
    description: "Carefully curated high-quality materials and craftsmanship in every piece."
  },
  {
    icon: <Truck className="w-10 h-10 text-primary" />,
    title: "Fast Delivery",
    description: "Express shipping and quick delivery to your doorstep within 2-3 business days."
  },
  {
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    title: "Secure Payment",
    description: "Safe and secure payment options with no additional processing fees."
  },
  {
    icon: <RefreshCw className="w-10 h-10 text-primary" />,
    title: "Easy Returns",
    description: "Hassle-free 30-day returns and exchanges for your peace of mind."
  }
];

export default function WhyUsSection() {
  return (
    <section className="py-16 px-4 md:px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-muted-foreground">Experience the best in online fashion shopping</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border bg-card">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}