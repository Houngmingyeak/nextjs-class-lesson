
import { blogType } from "@/lib/blog/bolg_type";
import Image from "next/image";

export default function BlogComponent({profile, name, position}: blogType) {
  return (
    <div>
      <Image
        src= {profile}
        alt=""
        width={50}
        height={50}
        loading="eager"
      />
      <hr />
      <h1>Name: {name}</h1>
      <h2>Position: {position}</h2>
    </div>
  );
}