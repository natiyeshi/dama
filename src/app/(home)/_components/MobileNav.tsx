import * as React from "react";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Drawer,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";
import Link from "next/link";

export default function MobileNav({ curr }: { curr: string }) {
  return (
    <Drawer>
      <DrawerTrigger>
        <GiHamburgerMenu className="text-white md:hidden  my-auto cursor-pointer ml-auto" />
      </DrawerTrigger>
      <DrawerContent className="h-[45vh] ">
        <div className="w-full overflow-auto m-auto text-sm max-w-[1500px] 2xl:mx-auto">
          <div className="flex flex-col gap-5   capitalize items-center ml-auto text-white text-sm">
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
              works
            </Link>
            <Link
              href="/#about"
              className={`hover:text-primary ${
                curr == "about" && "text-primary"
              } duration-200`}
            >
              About
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
              contact
            </Link>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
