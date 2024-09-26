import * as React from "react";

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { IPortfolio } from "./Portfolio";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FaArrowUpLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";

export default function ProjectDetail({
  data,
  isOpen,
}: {
  data: IPortfolio;
  isOpen: boolean;
}) {
  const [emblaRef] = useEmblaCarousel({ loop: false }, [
    Autoplay({
      delay: 2500,
      jump: false,
    }),
  ]);
  return (
    <Drawer open={isOpen}>
      <DrawerContent className="h-[65vh] ">
        <div className="w-full overflow-auto max-w-[1500px] 2xl:mx-auto">
          <DrawerHeader>
            <DrawerTitle className="capitalize">{data.name}</DrawerTitle>
            <DrawerDescription>Set your daily activity goal.</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 flex  max-md:flex-col max-md:gap-10 w-full">
            <div className="flex flex-col w-1/3 max-md:w-full">
              {data.link && (
                <div className="text-xs group mt-2 text-primary cursor-pointer place-items-center flex gap-1">
                  <span>{data.link}</span>
                  <FaArrowUpLong className="rotate-45 duration-150 text-xs " />
                </div>
              )}

              <div className="flex flex-col gap-2 mt-6 text-dim">
                {data.services.map((serv) => (
                  <div
                    key={serv}
                    className="flex gap-2 text-sm place-items-center"
                  >
                    <FaCheck className="text-primary" />
                    <div>{serv}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden w-full" ref={emblaRef}>
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
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
