"use client";
import logo from "@/../assets/logo/logo-1.svg";
import MobileNav from "@/app/(home)/_components/MobileNav";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Nav() {
  const [displayElement, setDisplayElement] = useState(false);
  const [curr, setCurr] = useState("");
  const getCurrSection = (num: number) => {
    if (num > 4500) {
      setCurr("footer");
    } else if (num > 4000) {
      setCurr("partners");
    } else if (num > 3300) {
      setCurr("about");
    } else if (num > 1750) {
      setCurr("portfolio");
    } else if (num > 450) {
      setCurr("service");
    } else {
      setCurr("");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      getCurrSection(window.scrollY);
      console.log(window.scrollY);
      if (window.scrollY > 300) {
        setDisplayElement(true);
      } else {
        setDisplayElement(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div
      className={`${
        displayElement && "from-bottom-slide   bg-background top-2 duration-200"
      }  w-[70%] flex place-items-center max-lg:w-full max-md:justify-between sticky bg-background px-4 mx-auto rounded-xl py-2 z-10`}
    >
      <Link href="/#">
        <Image src={logo} className="w-[30px]  py-2" alt="logo" />
      </Link>
      <div className="flex gap-5 max-md:hidden capitalize items-center ml-auto text-white text-sm">
        <Link
          href="/services"
          className={`hover:text-primary ${
            curr == "service" && "text-primary"
          } duration-200`}
        >
          Service 
        </Link>
        <Link
          href="/#portfolio"
          className={`hover:text-primary ${
            curr == "portfolio" && "text-primary"
          } duration-200`}
        >
          our works
        </Link>
        <Link
          href="/#about"
          className={`hover:text-primary ${
            curr == "about" && "text-primary"
          } duration-200`}
        >
          About Us
        </Link>
        <Link
          href="/#partners"
          className={`hover:text-primary ${
            curr == "partners" && "text-primary"
          } duration-200`}
        >
          Partners
        </Link>
        <Link
          href="/#footer"
          className={`hover:text-primary ${
            curr == "footer" && "text-primary"
          } duration-200`}
        >
          contact Us
        </Link>
      </div>
      <MobileNav curr={curr} />
    </div>
  );
}
