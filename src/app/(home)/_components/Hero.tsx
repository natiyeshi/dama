"use client"
import Pattern from "@/components/Pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const [clientCount, setClientCount] = useState(1);

  useEffect(() => {
    // Function to increment the number
    const countUp = () => {
      if (clientCount < 150) {
        setClientCount((prevCount) => prevCount + 1);
      }
    };

    // Set an interval to update the number
    const interval = setInterval(countUp, 40); // Adjust the speed as necessary

    // Clear the interval once the count reaches 150
    return () => clearInterval(interval);
  }, [clientCount]);

  return (
    <div id="hero" className="flex flex-col mt-[5rem] mb-52 ">
      <Pattern className="top-0 right-0" />
      <div className="from-top-slide text-dim">
        Welcome!
      </div>
      <div className="from-top-slide font-black text-[55px] max-lg:text-[50px] max-md:text-[40px]  w-2/3 max-lg:w-[80%] max-md:w-full  leading-[3.5rem] max-md:leading-[1em]  mt-6">
        Transform Your <span className="text-primary"> Digital Presence</span>{" "}
        with Dama Solutions
      </div>
      <div className="from-top-slide text-lg text-dim mt-6 w-2/3 max-lg:w-[80%] max-md:w-full">
        Elevating <span className="text-primary font-bold"> businesses</span>{" "}
        through innovation, strategy, and creativity. With over{" "}
        <span className="text-primary font-bold text-xl">
          {clientCount}+
        </span>{" "}
        satisfied clients, we specialize in web development, SEO, ERP solutions,
        branding, social media marketing, and more to drive your business forward.
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
