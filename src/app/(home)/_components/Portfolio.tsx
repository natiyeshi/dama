"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Work from "./Work";
import { initialData } from "@/lib/constants";
import { Button } from "@/components/ui/button";

export interface IPortfolio {
  name: string;
  link?: string;
  services: string[];
  type: ("branding" | "website" | "socialmedia")[];
  images: any[];
  logo: boolean;
}

const Portfolio = () => {
  const [curr, setCurr] = useState("all");
  const [portData, setPortData] = useState(initialData);

  const setFilter = (filter: string) => {
    setCurr(filter);
    setPortData(
      initialData.filter(
        (data) => filter == "all" || data.type.includes(filter as any)
      )
    );
  };
  const filters = [
    {
      name: "All",
      value: "all",
    },

    {
      name: "Website Design",
      value: "website",
    },

    {
      name: "Branding",
      value: "branding",
    },

    // {
    //   name: "Social Media Marketing",
    //   value: "socialmedia",
    // },
  ];
  return (
    <div id="portfolio" className="my-32 ">
      <div>Our portfolio</div>
      <div className="resp_comp font-black mt-2">
        Our Previous <span className="text-primary">Works!</span>
      </div>
      <div className="flex  md:justify-center overflow-auto max-sm:justify-between  sm:gap-10 mt-12">
        {filters.map((data, ind) => (
          <Button
            key={ind}
            variant={"ghost"}
            onClick={() => setFilter(data.value)}
            className={`duration-200 hover:bg-transparent hover:text-primary  cursor-pointer w-fit  ${
              curr == data.value &&
              "font-semibold text-primary underline capitalize"
            }`}
          >
            {data.name}
          </Button>
        ))}
      </div>
      <div className="w-full mt-10 gap-10 grid grid-cols-2 max-md:grid-cols-1">
        {portData.map((data) => (
          <Work key={data.name} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
