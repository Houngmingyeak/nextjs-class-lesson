"use client";

import { useState } from "react";

export default function AddToCardComponent() {
  // Creating State for Cart
  const [cart, setCart] = useState(0);

  //update state value

  return (
    <div>
      <h1>Cart: {cart}</h1>
      <button className="border p-4 rounded" onClick={() => setCart(cart + 1)}>
        Add to Cart
      </button>
    </div>
  );
}
