"use client";

import CardComponent from "@/components/homework/CardComponent";
import React from "react";

const products = [
  {
    id: 1,
    title: "Air Max 270",
    description: "Lightweight running shoe with responsive cushioning.",
    price: 19.99,
    originalPrice: 34.99,
    badge: "Sale",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80",
  },
  {
    id: 2,
    title: "Classic Tee",
    description: "Premium cotton everyday essential, minimal and sharp.",
    price: 29.99,
    originalPrice: 49.99,
    badge: "New",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
  },
  {
    id: 3,
    title: "Leather Bag",
    description: "Full-grain leather tote, built to last decades.",
    price: 89.99,
    originalPrice: 120.0,
    badge: "Hot",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&q=80",
  },
  {
    id: 4,
    title: "Wireless Buds",
    description: "30hr battery, active noise cancellation, crystal clear.",
    price: 59.99,
    originalPrice: 99.99,
    badge: "Sale",
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
  {
    id: 5,
    title: "Slim Watch",
    description: "Minimalist dial, sapphire glass, stainless steel band.",
    price: 149.99,
    originalPrice: 199.99,
    badge: undefined,
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 6,
    title: "Running Shorts",
    description: "4-way stretch, moisture-wicking, built-in liner.",
    price: 24.99,
    originalPrice: 39.99,
    badge: "Sale",
    rating: 4.1,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
  },
  {
    id: 7,
    title: "Snapback Cap",
    description: "Structured 6-panel cap with embroidered logo.",
    price: 18.99,
    originalPrice: undefined,
    badge: "New",
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
  },
  {
    id: 8,
    title: "Yoga Mat",
    description: "Non-slip 6mm thick mat with alignment lines.",
    price: 34.99,
    originalPrice: 54.99,
    badge: undefined,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=400&q=80",
  },
  {
    id: 9,
    title: "Denim Jacket",
    description: "Washed denim, relaxed fit, chest pockets.",
    price: 79.99,
    originalPrice: 110.0,
    badge: "Hot",
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=400&q=80",
  },
  {
    id: 10,
    title: "Ceramic Mug",
    description: "Hand-thrown 12oz mug, microwave & dishwasher safe.",
    price: 14.99,
    originalPrice: 22.99,
    badge: "Sale",
    rating: 4.0,
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&q=80",
  },
  {
    id: 11,
    title: "Sunglasses",
    description: "UV400 polarised lenses, lightweight titanium frame.",
    price: 44.99,
    originalPrice: 69.99,
    badge: undefined,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
  {
    id: 12,
    title: "Foam Roller",
    description: "High-density EVA foam, deep tissue muscle recovery.",
    price: 22.99,
    originalPrice: 35.0,
    badge: "New",
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&q=80",
  },
];

export default function ShopPage() {
  return (
    <div className="p-8">
      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <CardComponent
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
            price={product.price}
            originalPrice={product.originalPrice}
            badge={product.badge}
            rating={product.rating}
          />
        ))}
      </div>
    </div>
  );
}
