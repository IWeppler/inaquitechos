import  { useState, useEffect } from 'react';

interface ImageSliderProps {
  images: string[];
}

function ImageSlider({ images }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setCurrentIndex(0);
  }, [images]);

  if (!images || images.length === 0) {
    return <div>No hay imágenes disponibles.</div>;
  }

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="relative w-full max-w-lg mx-auto group h-80">
      <div
        style={{ backgroundImage: `url(${images[currentIndex]})` }}
        className="w-full h-full rounded-lg bg-center bg-cover duration-500"
        role="img"
        aria-label={`Imagen ${currentIndex + 1}`}
      />

      {/* Botón Izquierdo */}
      <button
        type="button"
        onClick={prevSlide}
        aria-label="Anterior"
        className="hidden group-hover:flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-2 w-10 h-10 rounded-full bg-black/30 text-white cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m15 18-6-6 6-6" />
        </svg>
      </button>

      {/* Botón Derecho */}
      <button
        type="button"
        onClick={nextSlide}
        aria-label="Siguiente"
        className="hidden group-hover:flex items-center justify-center absolute top-1/2 -translate-y-1/2 right-2 w-10 h-10 rounded-full bg-black/30 text-white cursor-pointer"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m9 18 6-6-6-6" />
        </svg>
      </button>

      {/* Puntos de Paginación */}
      <div className="flex space-x-2 absolute bottom-4 left-1/2 -translate-x-1/2">
        {images.map((_, slideIndex) => (
          <button
            key={slideIndex}
            type="button"
            onClick={() => goToSlide(slideIndex)}
            aria-label={`Ir a la imagen ${slideIndex + 1}`}
            className={`w-2.5 h-2.5 rounded-full ${currentIndex === slideIndex ? 'bg-white' : 'bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;