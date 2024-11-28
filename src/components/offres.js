import React, { useState } from 'react';
import './NewsSlider.css';

const NewsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const news = [
    {
      image: 'https://via.placeholder.com/800x400?text=Actualité+1',
      title: 'Nouvelle promotion spéciale pour les fêtes',
      description: 'Profitez de réductions incroyables sur nos produits de qualité.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Actualité+2',
      title: 'Ouverture d’une nouvelle boutique',
      description: 'Découvrez notre nouvel espace au cœur de la ville.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Actualité+3',
      title: 'Nouveau partenariat exclusif',
      description: 'Nous collaborons avec les meilleurs artisans locaux.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Actualité+4',
      title: 'Une qualité irréprochable',
      description: 'Toujours au service de nos clients fidèles.',
    },
    {
      image: 'https://via.placeholder.com/800x400?text=Actualité+5',
      title: 'Ateliers de dégustation',
      description: 'Venez découvrir nos produits directement en boutique.',
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % news.length); // Pour boucler sur le premier
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + news.length) % news.length); // Pour boucler sur le dernier
  };

  const getVisibleSlides = () => {
    const visibleSlides = [];
    for (let i = 0; i < 3; i++) {
      visibleSlides.push(news[(currentIndex + i) % news.length]);
    }
    return visibleSlides;
  };

  return (
    <div className="news-slider">
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <div className="slider-container" style={{ transform: `translateX(-${(currentIndex % news.length) * 33.333}%)` }}>
        {getVisibleSlides().map((slide, index) => (
          <div
            key={index}
            className="slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="slide-content">
              <h2>{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default NewsSlider;
