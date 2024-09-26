import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { IPortfolio } from "./Portfolio";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import ProjectDetail from "./ProjectDetail";
import { useState } from "react";

const Work = ({ data }: { data: IPortfolio }) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const [isOpen, setIsOpen] = useState(false);
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({
      delay: 2500 + randomNumber,
      jump: false,
    }),
  ]);
  return (
    <div
      onClick={() => setIsOpen((data) => !data)}
      className="flex max-sm:flex-col cursor-pointer from-top-slide max-sm:pb-5 bg-background p-2 rounded-xl group hover:shadow hover:shadow-primary duration-150"
    >
      <div className="overflow-hidden sm:w-1/2" ref={emblaRef}>
        <div className="flex gap-1">
          {data.images.map((image, ind) => (
            <Image
              key={ind}
              src={image}
              className="duration-200 w-fit h-[250px] object-cover rounded-lg  flex justify-center items-center flex-none basis-1 max-md:basis-1"
              alt="image"
            />
          ))}
        </div>
      </div>
      <div className="sm:w-1/2 ps-4 pt-4 ">
        <div className="flex gap-2 place-items-center">
          {data.logo && (
            <Image
              src={data.images[0]}
              className="duration-200 w-8 h-8 rounded-full object-cover"
              alt="Insafe"
            />
          )}
          <div className="capitalize text-lg">{data.name}</div>
        </div>
        {data.link && (
          <a
            href={`https://${data.link}`}
            target="_blank"
            className="text-xs group mt-2 text-primary cursor-pointer place-items-center flex gap-1"
          >
            <span>{data.link}</span>
            <FaArrowUpLong className="rotate-45 duration-150 text-xs " />
          </a>
        )}
        <ProjectDetail data={data} isOpen={isOpen} />

        <div className="flex flex-col gap-2 mt-6 text-dim">
          {data.services.map((serv) => (
            <div key={serv} className="flex gap-2 text-sm place-items-center">
              <FaCheck className="text-primary" />
              <div>{serv}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
