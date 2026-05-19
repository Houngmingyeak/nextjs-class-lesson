"use client"
import { use } from "react"

export default function BlogSlugsCatchAllRoute({
  params,
}: {
  params: Promise<{ slugs: string[] }>;
}) {
  const { slugs } = use(params);

  return (
    <h1>My blogs catch-all: {slugs.join(', ')}</h1>
  );
}

// //fordyman route of Use Client
// export default async function BlogSlugsCatchAllRoute({
//   params,
// }: {
//   params: Promise<{ slugs: string[] }>;
// }) {
//   const { slugs } = await params;

//   return (
//     // Using .join() makes sure the array elements display nicely with spaces
//     <h1>My blogs catch-all: {slugs.join(', ')}</h1>
//   );
// }