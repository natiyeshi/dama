"use client";
import Image from "next/image";
import lina from "@/../assets/home/partners/lina.png";
import lelacon from "@/../assets/home/partners/lelacon.png";
import midstone from "@/../assets/home/partners/midstone.png";
import nuna from "@/../assets/home/partners/nuna.png";
import rg from "@/../assets/home/partners/rg.png";
import onektn from "@/../assets/home/partners/onektn.png";
import anbesa from "@/../assets/home/partners/anbesa.png";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const Partners = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      delay: 1200,
      jump: false,
    }),
  ]);

  const partners = [lina, lelacon, midstone, anbesa, nuna, rg, onektn];

  return (
    <div id="partners" className="mt-32 ">
      <div className="">our partners</div>
      <div className="resp_comp font-black  mt-6">
        Some of <span className="text-primary">our Partners</span>
      </div>
      <div className="overflow-hidden mt-16 cursor-grab " ref={emblaRef}>
        <div className="flex gap-10">
          {partners.map((img, ind) => (
            <div
              key={ind}
              className="w-fit min-w-0 flex justify-center items-center flex-none basis-1/5 max-md:basis-1/4"
            >
              <Image
                src={img}
                className="max-sm:w-[75px] max-sm:h-[75px] w-[150px] h-[150px] rounded-full"
                alt="Lina"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
