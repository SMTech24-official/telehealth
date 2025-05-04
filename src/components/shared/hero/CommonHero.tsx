"use client";

import Image from "next/image";
import { useState } from "react";

interface YachtCharterSectionProps {
  title: string;
  description: string; // Only string description to handle truncation
  buttonText?: string;
  buttonLink?: string;
  imageSrc: string;
  imageAlt: string;
  direction?: "left" | "right";
  white?: boolean;
  additionalDescription?: string;

}

export default function CommonHero({
  title,
  description,
  buttonText,
  buttonLink,
  imageSrc,
  imageAlt,
  direction,
  white = false,
  additionalDescription
}: YachtCharterSectionProps) {
  const [showFull, setShowFull] = useState(false);

  // Calculate 50% of the description length
  const halfLength = Math.floor(description.length / 2);
  const shortDescription = description.slice(0, halfLength) + "...";

  // Determine text color classes based on the `white` prop
  const textColor = white ? "text-white" : "text-gray-600";

  return (
    <section className="container">
      {direction === "left" ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Content Side */}
          <div className="space-y-6">
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
              {title}
            </h2>
            <div
              className={`${textColor} leading-relaxed max-w-xl transition-all duration-300`}
            >
              {showFull ? description : shortDescription}
              <button
                className=" font-medium"
                onClick={() => setShowFull(!showFull)}
              >
                {showFull ? "See Less" : "See More"}
              </button>
            </div>

            <div>
              <div>
                {buttonText && (
                  <button className={`  rounded-full px-8 py-4 ${white ? " text-secondary bg-white" : " text-secondary border border-secondary"}`}>
                    <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                      {buttonText}
                    </a>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[300px] md:h-[550px] rounded-2xl overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Image Side */}
          <div className="relative h-[300px] md:h-[550px] rounded-2xl overflow-hidden">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6">
            <h2 className={`text-3xl md:text-4xl font-bold ${textColor}`}>
              {title}
            </h2>
            <div
              className={`${textColor} leading-relaxed max-w-xl transition-all duration-300`}
            >
              {showFull ? description : shortDescription}
              <button
                className="text-secondary font-medium"
                onClick={() => setShowFull(!showFull)}
              >
                {showFull ? "See Less" : "See More"}
              </button>
            </div>
            <div>
              {buttonText && (
                <button className={`  rounded-full px-8 py-4 ${white ? " text-secondary bg-white" : " text-secondary border border-secondary"}`}>
                  <a href={buttonLink} target="_blank" rel="noopener noreferrer">
                    {buttonText}
                  </a>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      <div className="md:mt-8 mt-6 lg:mt-12">
        {
          additionalDescription && <p>
            {additionalDescription}
          </p>
        }
      </div>
    </section>
  );
}
