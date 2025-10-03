import React, { useState, useEffect } from 'react';
import './Carousel.scss';

const paperTexture = '/xp-components/assets/paper.png';
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
}

const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay = false,
  interval = 3000,
  ...rest
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  // 터치 이벤트 핸들러
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return;
    const delta = touchStartX - touchEndX;

    if (delta > 50) {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    } else if (delta < -50) {
      setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };
  // 자동 슬라이드 기능
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, items.length]);

  return (
    <div
      className="carousel"
      style={{ backgroundImage: `url(${paperTexture})` }}
    >
      <div
        className="carousel__container"
        {...rest}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <ul
          className="carousel__list"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <li
              key={index}
              className="carousel__item"
              onClick={item.onClick}
              aria-hidden={index !== currentIndex}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title ?? ''}
                  className="carousel__image"
                  style={{
                    backgroundImage: `url(${paperTexture})`,
                    ...item.imageStyle
                  }}
                />
              )}
              <div className="carousel__content">
                {item.title && (
                  <h2 className="carousel__title">{item.title}</h2>
                )}
                {item.text && <p className="carousel__text">{item.text}</p>}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="carousel__indicators">
        {items.map((_, index) => (
          <button
            style={{ backgroundImage: `url(${paperTexture})` }}
            key={index}
            className={`carousel__indicator ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
