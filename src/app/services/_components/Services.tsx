import Service, { IService } from "./service";
import webImg from "@/../assets/services/web_img.svg";
import seoImg from "@/../assets/services/seo_img.svg";
import brandingImg from "@/../assets/services/branding_img.svg";
import boostImg from "@/../assets/services/boost_img.svg";
import socialMediaImg from "@/../assets/services/socialmedial_img.svg";

export const servicesData: IService[] = [
  {
    id: "website",
    title: "Website Development",
    description:
      "Transform your ideas into a powerful online presence with our web development services. We create dynamic, responsive websites tailored to meet your business goals, ensuring a seamless user experience across all devices",
    num: "01",
    img: webImg,
    types: [
      "Simple and Elegant",
      "Responsive Design",
      "Fast Loading Time",
      "SEO friendly",
      "Secure and Reliable",
    ],
  },
  {
    id: "seo",

    title: "Search Engine Optimization (SEO)",
    description:
      "Boost your visibility and attract the right audience with our expert SEO services. We optimize your website to rank higher in search engines, driving organic traffic and helping your business grow.",
    num: "02",
    img: seoImg,
    types: [
      "On-Page Optimization",
      "Local SEO Strategies",
      "Content Optimization",
    ],
  },

  {
    id: "branding",

    title: "Branding Design",
    description:
      "Build a strong, memorable brand with our custom branding design services. From logos to full brand identity packages, we craft visual elements that resonate with your target market and set you apart from the competition.",
    num: "03",
    img: brandingImg,
    types: [
      "Unique Logo Design",
      "Flyer design",
      "Stamp Design",
      "Brochure Design",
      "Company Profile",
      "Business Card Design",
      "Intro Animation",
    ],
  },
  {
    id: "boosting",
    title: "Social Media Boosting",
    description:
      "Accelerate your business growth with our boosting services. We create strategic campaigns that enhance your brand's reach, increase engagement, and drive conversions across all platforms",
    num: "04",
    img: boostImg,
    types: ["Facebook boost", "Instagram boost"],
  },
  {
    id: "socialmedial",
    title: "Social Media Marketing",
    description:
      "Elevate your brand’s presence across all major social platforms with our comprehensive social media management services. We craft engaging content, foster meaningful interactions, and develop strategic campaigns that resonate with your audience.",
    num: "05",
    img: socialMediaImg,
    types: [
      "Social Media Strategy Development",
      "Content Creation and Scheduling",
      "Video Editing",
    ],
  },
];

const Services = () => {
  return (
    <div className="mt-32 flex flex-col gap-32">
      {servicesData.map((data, ind) => (
        <Service key={data.id} flip={ind % 2 == 0} data={data} />
      ))}
    </div>
  );
};

export default Services;
