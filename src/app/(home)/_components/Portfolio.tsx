"use client";
/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";
import Work from "./Work";
import { initialData } from "@/lib/constants";

export interface IPortfolio {
  name: string;
  link?: string;
  services: string[];
  type: ("branding" | "website" | "socialmedia")[];
  images: any[];
  logo : boolean;
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
  return (
    <div id="portfolio" className="my-32 ">
      <div>Our portfolio</div>
      <div className="resp_comp font-black mt-2">
        Our Previous <span className="text-primary">Works!</span>
      </div>
      <div className="flex  md:justify-center overflow-auto max-sm:justify-between  sm:gap-10 mt-12">
        <div
          onClick={() => setFilter("all")}
          className={`duration-200 cursor-pointer w-fit ${
            curr == "all" && "font-semibold text-primary underline"
          }`}
        >
          All
        </div>
        <div
          onClick={() => setFilter("website")}
          className={`duration-200 cursor-pointer w-fit ${
            curr == "website" && "font-semibold text-primary underline"
          }`}
        >
          Website Designssss
        </div>
        <div
          onClick={() => setFilter("branding")}
          className={`duration-200 cursor-pointer ${
            curr == "branding" && "font-semibold text-primary underline"
          }`}
        >
          Branding
        </div>
        <div
          onClick={() => setFilter("socialmedia")}
          className={`duration-200 cursor-pointer ${
            curr == "socialmedia" && "font-semibold text-primary underline"
          }`}
        >
          Social Media Marketing
        </div>
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
