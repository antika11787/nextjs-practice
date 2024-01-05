import Image from "next/image"
import img from "@/public/images/img.webp"
export default function Home() {
  return (
    <main>
      <div>Home page</div>
      <Image src={img} alt="next" />
    </main>
  );
}
