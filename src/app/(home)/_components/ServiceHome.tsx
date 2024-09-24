import { IService } from "@/app/services/_components/service";
import { servicesData } from "@/app/services/_components/Services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaArrowUpLong } from "react-icons/fa6";

const ServiceHome = () => {
  return (
    <div id="service" className="flex flex-col">
      <div>What can we do for you</div>
      <div className="resp_comp font-black   mt-2">
        What we <span className="text-primary">provide</span> for you!
      </div>
      <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-12 my-12 ">
        {servicesData.map((service, ind) => (
          <Service service={service} key={ind} />
        ))}
      </div>
      <Link href={"/services"}>
        <Button className="mx-auto text-background flex gap-1">
          <span>Services</span>
          <FaArrowUpLong className="rotate-45" />
        </Button>
      </Link>
    </div>
  );
};

const Service = ({ service }: { service: IService }) => {
  return (
    <Link
      href={`/services#${service.id}`}
      className="flex hover:shadow-lg duration-500 cursor-pointer hover:shadow-primary flex-col gap-4 border border-primary  bg-background/30 hover:bg-background/55 rounded-xl px-3 py-5 "
    >
      <div className="text-[50px] font-black text-border-black">
        {service.num}
      </div>
      <div className="text-lg ">{service.title}</div>
      <div className="text-dim">{service.description}</div>
      <Link
        href={`/services#${service.id}`}
        className="w-fit hover:bg-none text-sm font-semibold place-items-center cursor-pointer flex gap-1 text-primary"
      >
        <span>Explore</span>
        <FaArrowUpLong className="rotate-45" />
      </Link>
    </Link>
  );
};

export default ServiceHome;
