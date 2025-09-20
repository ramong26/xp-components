import React, { useState, useEffect } from 'react';
import './Carousel.scss';

export interface CarouselItem {
  title?: string;
  text?: string;
  image?: string;
  imageStyle?: React.CSSProperties;
  onClick?: () => void;
}
export interface CarouselProps {
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

  // 자동 슬라이드 기능
  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(timer);
  }, [autoPlay, interval, currentIndex, items.length]);

  return (
    <div className="carousel">
      <div className="carousel__container" {...rest}>
        <ul
          className="carousel__list"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <li key={index} className="carousel__item" onClick={item.onClick}>
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="carousel__image"
                  style={item.imageStyle}
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
            key={index}
            className={`carousel__indicator ${
              index === currentIndex ? 'active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
