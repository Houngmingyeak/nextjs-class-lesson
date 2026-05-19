// "use client";

// import { useEffect, useState } from "react";

// export default function Blog() {
//   const [blog, setBlog] = useState([]);
//   useEffect(() => {
//     async function getAllBlog() {
//       const res = await fetch(process.env.NEXT_PUBLIC_BASE_URL + "posts");
//       const data = await res.json();
//       setBlog(data?.posts);
//       return data;
//     }
//   });
//   getAllBlog();
//   return (
//     <div>
//       {blog?.map(({ name, body }, _) => (
//         <BlogComponent2 
//         key="_" 
//         title={"name"} 
//         body={body}
//         />
//       ))}
//     </div>
//   );
// }
