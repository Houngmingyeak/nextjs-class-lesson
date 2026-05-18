"use client";

import { cardType } from "@/lib/cart/cart_type";
import Image from "next/image";
import React, { useState } from "react";

export default function CardComponent({
  description,
  image,
  title,
  price,
  badge,
  rating,
  originalPrice,
  onAddToCart,
}: cardType) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    setAdded(true);
    onAddToCart?.();
    setTimeout(() => setAdded(false), 1800);
  };

  const discount =
    originalPrice && originalPrice > price
      ? Math.round(((originalPrice - price) / originalPrice) * 100)
      : null;

  return (
    <div className="group relative w-[300px] rounded-2xl border border-neutral-200 bg-white overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-[220px] w-full overflow-hidden bg-neutral-100">
        <Image
          src={image}
          alt={title ?? description}
          fill
          loading="eager"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {badge && (
          <span className="absolute left-3 top-3 rounded-md bg-rose-500 px-2.5 py-1 text-[11px] font-medium text-white">
            {badge}
          </span>
        )}

        {discount && (
          <span className="absolute bottom-3 left-3 rounded-md bg-emerald-600 px-2 py-0.5 text-[11px] font-medium text-white">
            -{discount}%
          </span>
        )}

        <button
          onClick={() => setWished((w) => !w)}
          aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white transition-transform hover:scale-110"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill={wished ? "#e24b4a" : "none"}
            stroke={wished ? "#e24b4a" : "#888"}
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        {title && (
          <h2 className="mb-1 text-[15px] font-semibold text-neutral-900 leading-snug truncate">
            {title}
          </h2>
        )}

        <p className="mb-3 text-[13px] leading-relaxed text-neutral-500 line-clamp-2">
          {description}
        </p>

        {rating !== undefined && (
          <div className="mb-3 flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill={star <= Math.round(rating) ? "#f59e0b" : "none"}
                  stroke="#f59e0b"
                  strokeWidth="2"
                >
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                </svg>
              ))}
            </div>
            <span className="text-[12px] text-neutral-400">
              {rating.toFixed(1)}
            </span>
          </div>
        )}

        <hr className="mb-4 border-neutral-100" />

        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-[18px] font-semibold text-neutral-900">
              ${price.toFixed(2)}
            </span>
            {originalPrice && (
              <span className="text-[13px] text-neutral-400 line-through">
                ${originalPrice.toFixed(2)}
              </span>
            )}
          </div>

          <button
            onClick={handleAddToCart}
            className={`flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[13px] font-medium text-white transition-all duration-200 active:scale-95 ${
              added ? "bg-emerald-600" : "bg-neutral-900 hover:bg-neutral-700"
            }`}
          >
            {added ? (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Added!
              </>
            ) : (
              <>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="9" cy="21" r="1" />
                  <circle cx="20" cy="21" r="1" />
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                </svg>
                Add to Cart
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
