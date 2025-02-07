import Image from "next/image";
import about1Img from "../../../public/about-1.png";
import about2Img from "../../../public/about-2.png";

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16 ">
      <div className="container mx-auto grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
            <Image
              src={about1Img}
              alt="Foto do cachorro"
              fill
              quality={100}
              className="object-cover hover:scale-110 duration-300"
              priority
            />
          </div>
          <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
            <Image
              src={about2Img}
              alt="Foto do cachorro 2"
              fill
              quality={100}
              className="object-cover "
              priority
            />
          </div>
        </div>
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">SOBRE</h2>
          <p>
            Until one has loved an animal, a part of their soul remains asleep.
            We believe this, and we believe in easy access to things that are
            good for our mind, body, and spirit. With smart offerings, excellent
            support, and secure checkout, you’re in good hands.
          </p>
        </div>
      </div>
    </section>
  );
}
