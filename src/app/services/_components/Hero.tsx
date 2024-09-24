import serviceImg from "@/../assets/home/service.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
const Hero = () => {
  return (
    <div className="grid grid-cols-2 max-lg:grid-cols-1 ">
      <div className=" mt-32 flex flex-col gap-5">
        <div className="resp_comp">
          Our <span className="text-primary">Services</span>
        </div>
        <p className="text-dim">
          Founded on the principles of strategic thinking and innovation, Dama
          is a dynamic company that provides a wide range of digital services
          designed to elevate your business to new heights. Whether you&apos;re a
          startup looking to establish a strong online presence or an
          established brand aiming to expand your reach, we have the tools,
          expertise, and passion to make it happen.
        </p>
        <Link href={"/services#website"}>
          <Button className="w-fit text-background font-bold mt-5">
            Find Out More
          </Button>
        </Link>
      </div>
      <Image src={serviceImg} className="w-[400px] m-auto" alt="Service" />
    </div>
  );
};

export default Hero;
