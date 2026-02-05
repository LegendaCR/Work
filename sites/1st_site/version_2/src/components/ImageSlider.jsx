import { useState, useEffect } from 'react'
import './ImageSlider.css'

const baseUrl = import.meta.env.BASE_URL || ''

const images = [
  `${baseUrl}allimeges/brice-t.jpg`,
  `${baseUrl}allimeges/1587647577_11-p-foni-iz-klesh-royal-19.jpg`,
  `${baseUrl}allimeges/skachat-foto-kartinki5.jpg`,
  `${baseUrl}allimeges/рряль.jpg`,
  `${baseUrl}allimeges/maxresdefault.jpg`,
  `${baseUrl}allimeges/thu67.jpg`
]

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className="image-slider">
      <div className="slider-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider-controls">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default ImageSlider
