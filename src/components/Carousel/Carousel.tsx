import React, { useState, useEffect } from 'react';
import './Carousel.scss';

export type CarouselVariant = 'default' | 'headline';

export interface CarouselItem {
  title?: string;
  text?: string;
  image?: string;
  imageStyle?: React.CSSProperties;
  onClick?: () => void;
}

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: CarouselItem[];
  autoPlay?: boolean;
  interval?: number;
  variant?: CarouselVariant;
  showIndicators?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  variant = 'default',
  showIndicators = true,
  className,
  ...rest
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => setTouchStartX(e.touches[0].clientX);
  const handleTouchMove = (e: React.TouchEvent) => setTouchEndX(e.touches[0].clientX);

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchStartX - touchEndX;
    if (delta > 50) setCurrentIndex((prev) => (prev + 1) % items.length);
    if (delta < -50) setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    setTouchStartX(null);
    setTouchEndX(null);
  };

  useEffect(() => {
    if (!autoPlay || items.length < 2) return;
    const timer = setInterval(() => setCurrentIndex((prev) => (prev + 1) % items.length), interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  return (
    <div className={['carousel', `carousel--${variant}`, className].filter(Boolean).join(' ')}>
      <div className="carousel__container" {...rest} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <ul className="carousel__list" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {items.map((item, index) => (
            <li key={index} className="carousel__item" onClick={item.onClick} aria-hidden={index !== currentIndex}>
              {item.image && <img src={item.image} alt={item.title ?? ''} className="carousel__image" style={item.imageStyle} />}
              <div className="carousel__content">
                {item.title && <h2 className="carousel__title">{item.title}</h2>}
                {item.text && <p className="carousel__text">{item.text}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      {showIndicators && (
        <div className="carousel__indicators">
          {items.map((_, index) => (
            <button
              key={index}
              className={`carousel__indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              type="button"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Carousel;
