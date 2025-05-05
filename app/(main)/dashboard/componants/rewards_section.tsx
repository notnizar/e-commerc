import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const rewardTiers = [
  {
    name: "Bronze",
    points: "0-100",
    benefits: ["Free shipping on orders over $50", "Birthday special offer", "Early access to sales"]
  },
  {
    name: "Silver",
    points: "101-500",
    benefits: ["Free shipping on all orders", "Double points on weekends", "Exclusive member events", "Priority customer service"]
  },
  {
    name: "Gold",
    points: "501+",
    benefits: ["VIP early access to sales", "Triple points on weekends", "Free returns", "Dedicated concierge service", "Exclusive Gold member events"]
  }
]

export default function RewardsSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Rewards Program</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our rewards program and earn points with every purchase
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 justify-center items-stretch max-w-6xl mx-auto">
          {rewardTiers.map((tier) => (
            <Card key={tier.name} className="relative overflow-hidden h-full">
              <div className={`absolute inset-0 opacity-10 bg-gradient-to-br
                ${tier.name === "Bronze" ? "from-orange-500 to-yellow-500" :
                  tier.name === "Silver" ? "from-gray-300 to-gray-100" :
                  "from-yellow-400 to-yellow-200"}`}
              />
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">{tier.name}</Badge>
                <CardTitle>{tier.points} Points</CardTitle>
                <CardDescription>Earn {tier.points.split("-")[0]} points to qualify</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {tier.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className={`w-5 h-5 ${
                          tier.name === "Gold" ? "text-yellow-500" :
                          tier.name === "Silver" ? "text-gray-400" :
                          "text-orange-500"
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}