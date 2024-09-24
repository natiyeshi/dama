import Pattern from "@/components/Pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <div id="hero" className="flex flex-col mt-[5rem] mb-40 ">
      <Pattern className="top-0 right-0" />
      <div className="from-top-slide">Hey there, Welcome to our site!</div>
      <div className="from-top-slide font-black text-[75px] max-lg:text-[50px] max-md:text-[40px]  w-2/3 max-lg:w-[80%] max-md:w-full  leading-[5rem] max-md:leading-[1em]  mt-6">
        Let Us <span className="text-primary">Start</span> Some Thing
        <span className="text-primary"> Big With US!!</span>
      </div>
      <div className="flex gap-5 mt-12 from-top-slide">
        <Link href="/#service">
          <Button variant={"outline"}>Learn More</Button>
        </Link>
        <Link href="/#footer">
          <Button className="text-background">Contact US</Button>
        </Link>
      </div>
    </div>
  );
}
