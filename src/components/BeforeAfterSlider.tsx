"use client";

import Image from "next/image";
import { useState, type CSSProperties } from "react";
import type { GalleryPhoto } from "@/lib/gallery";

type BeforeAfterSliderProps = {
  title: string;
  before: GalleryPhoto;
  after: GalleryPhoto;
  width: number;
  height: number;
  priority?: boolean;
};

const sizes = "(max-width: 640px) 100vw, (max-width: 980px) 90vw, 560px";

export default function BeforeAfterSlider({
  title,
  before,
  after,
  width,
  height,
  priority = false,
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);

  return (
    <div
      className="ba-slider"
      style={{ "--ba-position": `${position}%` } as CSSProperties}
    >
      <Image
        className="ba-slider__img"
        src={after.src}
        alt={after.alt}
        width={width}
        height={height}
        sizes={sizes}
        loading={priority ? "eager" : "lazy"}
      />
      <div className="ba-slider__before">
        <Image
          className="ba-slider__img"
          src={before.src}
          alt={before.alt}
          width={width}
          height={height}
          sizes={sizes}
          loading={priority ? "eager" : "lazy"}
        />
      </div>

      <span className="ba-slider__tag ba-slider__tag--before" aria-hidden="true">
        Before
      </span>
      <span className="ba-slider__tag ba-slider__tag--after" aria-hidden="true">
        After
      </span>
      <span className="ba-slider__handle" aria-hidden="true" />

      <input
        className="ba-slider__range"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(event) => setPosition(Number(event.target.value))}
        aria-label={`Drag to compare before and after: ${title}`}
        aria-valuetext={`${position}% before photo visible`}
      />
    </div>
  );
}
