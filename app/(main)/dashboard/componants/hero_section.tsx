'use client';

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://placehold.co/1920x700/FF5733/FFFFFF?text=New+Arrivals', 
    heading: 'Explore Our Latest Collection',
    subheading: 'Fresh styles just added.',
    buttonText: 'Shop New Arrivals',
    buttonLink: '/new-arrivals'
  },
  {
    id: 2,
    image: 'https://placehold.co/1920x700/33FF57/000000?text=Summer+Sale',
    heading: 'Summer Sale is Here!',
    subheading: 'Up to 50% off on select items.',
    buttonText: 'Shop Sale',
    buttonLink: '/sale'
  },
  {
    id: 3,
    image: 'https://placehold.co/1920x700/3357FF/FFFFFF?text=Mens+Collection',
    heading: 'Discover the Men\'s Edit',
    subheading: 'Style and comfort combined.',
    buttonText: 'Shop Men',
    buttonLink: '/men' 
  }
];

const HeroSectionCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <section className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Carousel slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ease-in-out
            ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
              {slide.heading}
            </h1>

            <p className="text-lg md:text-xl mb-8 animate-fade-in-up animation-delay-200">
              {slide.subheading}
            </p>

            <Button
              size="lg"
              className="text-lg px-8 py-3 animate-fade-in-up animation-delay-400"
              onClick={() => window.location.href = slide.buttonLink}
            >
              {slide.buttonText}
            </Button>
          </div>
        </div>
      ))}

      {/* Carousel Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-20 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-20 p-2 bg-black bg-opacity-50 rounded-full text-white hover:bg-opacity-75 transition"
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={32} />
      </button>

      {/* Carousel Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full bg-white transition ${index === currentSlide ? 'opacity-100' : 'opacity-50'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

    </section>
  );
};

export default HeroSectionCarousel;
