import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function NewsletterSection() {
  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-accent/10">
      <div className="container px-4 md:px-6">
        <Card className="w-full max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold">Join Our Newsletter</CardTitle>
            <CardDescription className="text-lg text-muted-foreground">
              Subscribe to get exclusive deals and stay updated with latest trends!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1"
              />
              <Button type="submit" size="lg">
                Subscribe
              </Button>
            </form>
            <p className="text-sm text-muted-foreground mt-4 text-center">
              By subscribing, you agree to receive marketing emails. You can unsubscribe at any time.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}