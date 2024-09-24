
import insafeImg1 from "@/../assets/portfolio/insafe1.png";
import insafeImg2 from "@/../assets/portfolio/insafe2.png";
import insafeImg3 from "@/../assets/portfolio/insafe3.png";
import shengoImg1 from "@/../assets/portfolio/shengo1.png";
import shengoImg2 from "@/../assets/portfolio/shengo2.png";
import shengoImg3 from "@/../assets/portfolio/shengo3.png";

import linaImg1 from "@/../assets/portfolio/lina1.png";
import linaImg2 from "@/../assets/portfolio/lina2.png";
import linaImg3 from "@/../assets/portfolio/lina3.png";

import midstoneImg1 from "@/../assets/portfolio/midstone1.png";
import midstoneImg2 from "@/../assets/portfolio/midstone2.png";
import midstoneImg3 from "@/../assets/portfolio/midstone3.png";

import onektnImg1 from "@/../assets/portfolio/onektn1.png";
import onektnImg2 from "@/../assets/portfolio/onektn2.png";
import onektnImg3 from "@/../assets/portfolio/onektn3.png";

import royalImg1 from "@/../assets/portfolio/royal1.png";
import royalImg2 from "@/../assets/portfolio/royal2.png";
import royalImg3 from "@/../assets/portfolio/royal3.png";

import technoImg1 from "@/../assets/portfolio/techno1.png";
import technoImg2 from "@/../assets/portfolio/techno2.png";
import technoImg3 from "@/../assets/portfolio/techno3.png";

import universeImg1 from "@/../assets/portfolio/universe1.png";
import universeImg2 from "@/../assets/portfolio/universe2.png";
import universeImg3 from "@/../assets/portfolio/universe3.png";

import yosaImg1 from "@/../assets/portfolio/yosa1.png";
import yosaImg2 from "@/../assets/portfolio/yosa2.png";
import yosaImg3 from "@/../assets/portfolio/yosa3.png";

import { IPortfolio } from "@/app/(home)/_components/Portfolio";

const brandings = ["flyers","brochers","stamp","company Profile"]

export const initialData: IPortfolio[] = [
   
    {
      name: "Shengo",
      link: "shengo.vercel.app",
      services: ["Website Design"],
      type: ["website"],
      images: [shengoImg1, shengoImg2, shengoImg3],
      logo: false
    },
    {
        name: "Lina",
        services: brandings,
        type: ["branding"],
        images: [linaImg1, linaImg2, linaImg3],
        logo: false

      },
      {
        name: "midstone",
        services: brandings,
        type: ["branding"],
        images: [midstoneImg1, midstoneImg2, midstoneImg3],
        logo: true
        
      },
      {
        name: "onektn",
        services: brandings,
        type: ["branding"],
        images: [onektnImg1, onektnImg2, onektnImg3],
        logo: true
        
      },
      {
        name: "royal",
        services: brandings,
        type: ["branding"],
        images: [royalImg1, royalImg2, royalImg3],
        logo: true
        
      },
      {
        name: "Insafe Safety Solutions",
        link: "insafesafety.org",
        services: ["Website Design", "Branding Service"],
        type: ["website", "branding"],
        images: [insafeImg1, insafeImg2, insafeImg3],
        logo: true
        
      },
      {
        name: "techno",
        services: brandings,
        type: ["branding"],
        images: [technoImg1, technoImg2, technoImg3],
        logo: true
        
      },
      {
        name: "universe",
        services: brandings,
        type: ["branding"],
        images: [universeImg1, universeImg2, universeImg3],
        logo: true
        
      },
    {
        name: "yosa",
        services: brandings,
        type: ["branding"],
        images: [yosaImg1, yosaImg2, yosaImg3],
        logo: true,

      },
  ];

