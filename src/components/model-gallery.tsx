"use client";

import Image from "next/image";
import { useState } from "react";

type ModelGalleryProps = {
  images: readonly [string, string, string];
  modelName: string;
};

export function ModelGallery({ images, modelName }: ModelGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="model-gallery">
      <div className="model-gallery__main">
        <Image src={images[activeIndex]} alt={`${modelName}, view ${activeIndex + 1}`} fill priority sizes="(max-width: 900px) 100vw, 58vw" />
      </div>
      <div className="model-gallery__thumbnails" aria-label={`${modelName} image gallery`}>
        {images.map((image, index) => (
          <button key={image} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => setActiveIndex(index)} aria-label={`Show image ${index + 1} of 3`} aria-pressed={index === activeIndex}>
            <Image src={image} alt="" fill sizes="160px" />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
