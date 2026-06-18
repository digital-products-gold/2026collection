import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './SampleCarousel.css';

const SampleCarousel = ({ images, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  if (!images || images.length === 0) return null;

  return (
    <div className="carousel-wrapper">
      {title && <h3 className="carousel-title text-center">{title}</h3>}
      <div className="carousel" ref={emblaRef}>
        <div className="carousel__container">
          {images.map((imgSrc, index) => (
            <div className="carousel__slide" key={index}>
              <div className="carousel__slide__inner">
                <img 
                  src={imgSrc} 
                  alt={`Sample ${index + 1}`} 
                  className="carousel__img" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="carousel-controls">
        <button 
          className="carousel-btn" 
          onClick={scrollPrev} 
          disabled={!prevBtnEnabled}
          aria-label="Previous"
        >
          <ChevronLeft size={24} />
        </button>
        
        <div className="carousel-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`carousel-dot ${index === selectedIndex ? 'is-selected' : ''}`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <button 
          className="carousel-btn" 
          onClick={scrollNext} 
          disabled={!nextBtnEnabled}
          aria-label="Next"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SampleCarousel;
