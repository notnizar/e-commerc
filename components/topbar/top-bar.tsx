'use client';

import { Package2, Search, ShoppingCart, CircleUser } from 'lucide-react';
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ROUTES from '@/lib/routes';

export default function TopBar() {
  return (
    <>
      {/* Discount Banner */}
      <div className="w-full bg-black text-white text-center py-2 text-sm">
        Get 15% off your first order with code FIRST15!
      </div>

      <header className="sticky top-0 z-50 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        {/* Mobile Navigation Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Package2 className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <a
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Your Store</span>
              </a>
              <a href={ROUTES.Protected.HOME} className="hover:text-foreground">
                Home
              </a>
              <a
                href={ROUTES.Protected.shop}
                className="text-muted-foreground hover:text-foreground"
              >
                Shop
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Categories
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                About
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Contact
              </a>
            </nav>
          </SheetContent>
        </Sheet>

        {/* Desktop Navigation */}
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">

          <a
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only">Your Store</span>
          </a>
          <a href={ROUTES.Protected.dashboard} className="text-foreground transition-colors hover:text-foreground">
            Home
          </a>
          <a
            href={ROUTES.Protected.shop}
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Shop
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </a>
          <a
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </a>
        </nav>

        {/* Search and Action Icons */}
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
          {/* Search Bar */}
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search products..."
                className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
              />
            </div>
          </form>

          {/* Cart Button */}
          <Button variant="secondary" size="icon" className="rounded-full">
            <ShoppingCart className="h-5 w-5" />
            <span className="sr-only">Cart</span>
          </Button>
          {/* User Account Button */}
          <Button variant="secondary" size="icon" className="rounded-full">
             <CircleUser className="h-5 w-5" />
             <span className="sr-only">User Account</span>
          </Button>
        </div>
      </header>
    </>
  );
}
