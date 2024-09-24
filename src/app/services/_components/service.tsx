import Image from "next/image";
import { FaCheck } from "react-icons/fa6";
/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IService {
  title: string;
  num: string;
  description: string;
  types: string[];
  img : any;
  id: string;
}

export default function Service({
  data,
  flip,
}: {
  data: IService;
  flip: boolean;
}) {
  return (
    <div id={data.id} className={`grid grid-cols-2 max-lg:grid-cols-1 gap-10  `}>
      <div className={` ${flip && "lg:order-2"} flex flex-col`}>
        <div className="flex gap-2 md:place-items-center max-md:flex-col">
          <div className="text-border-black font-black text-[70px]">
            {data.num}
          </div>
          <div className="text-3xl">{data.title}</div>
        </div>
        <p className="text-dim mt-4">{data.description}</p>
        <div className="mt-6 grid grid-cols-2 max-sm:grid-cols-1 gap-4">
          {data.types.map((type) => (
            <div key={type

            } className="flex gap-2 place-items-center text-dim">
              <FaCheck className="text-primary" />
              <div>{type} </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex">
        <Image src={data.img} className="w-[500px] m-auto" alt="webimg" />
      </div>
    </div>
  );
}
