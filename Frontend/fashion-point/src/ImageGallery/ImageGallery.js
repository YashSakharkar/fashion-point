import React from "react";
import "./ImageGallery.css";

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      src: "/images/CardSecondImg/single-image-2.jpg",
      alt: "Image 1",
    },
    {
      id: 2,
      src: "/images/kids/Caps/Bucket cap.jpeg",
      alt: "Image 2",
    },
    {
      id: 3,
      src: "/images/mens/shirts/Linen summer shirt.webp",
      alt: "Image 3",
    },
    {
      id: 4,
      src: "/images/women/Dresses/Shirt dress.jpeg",
      alt: "Image 4",
    },
    {
      id: 5,
      src: "/images/CardSecondImg/single-image-2.jpg",
      alt: "Image 1",
    },
    {
      id: 6,
      src: "/images/kids/Caps/Bucket cap.jpeg",
      alt: "Image 2",
    },
    {
      id: 7,
      src: "/images/mens/shirts/Linen summer shirt.webp",
      alt: "Image 3",
    },
    {
      id: 8,
      src: "/images/women/Dresses/Shirt dress.jpeg",
      alt: "Image 4",
    },
  ];

  return (
    <div className="gallery">
      {images.map((image) => (
        <div className="gallery-item" key={image.id}>
          <img src={image.src} alt={image.alt} />
          <div className="overlay">
            <p>{image.alt}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
