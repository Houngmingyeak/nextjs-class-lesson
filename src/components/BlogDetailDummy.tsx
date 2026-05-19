"use client";
import { useEffect, useState } from "react";
import { blogTypeDummy } from "./BlogComponentDummy";

export default function BlogDetailDummy({ id }: { id: string }) {
  const [blog, setBlog] = useState<blogTypeDummy>();

  useEffect(() => {
    async function getAllBlog() {
      const res = await fetch(
        process.env.NEXT_PUBLIC_BASE_URL + `/posts/${id}`,
      );
      const data = await res.json();
      setBlog(data);
      return data;
    }
    getAllBlog();
  }, []);
  return (
    <div>
      <h1>Title : {blog?.title}</h1>
      <p>Body : {blog?.body}</p>
    </div>
  );
}