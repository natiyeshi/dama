import Image from "next/image";
import aboutImg from "@/../assets/home/about_illustration.svg";
const About = () => {
  return (
    <div id="about">
      <div className="grid grid-cols-2 max-lg:grid-cols-1 max-lg:gap-10">
        <div className="flex gap-5  flex-col w-full ">
          <div className="">about us</div>
          <div className="resp_comp font-black mt-0">
            Who We <span className="text-primary">Are ?</span>
          </div>
          <p className="text-dim">
            At Dama, we believe that every business is unique, and our mission
            is to help you stand out in a crowded digital landscape.
          </p>
          <p className="text-dim">
            Founded on the principles of strategic thinking and innovation, Dama
            is a dynamic company that provides a wide range of digital services
            designed to elevate your business to new heights. Whether you&apos;re a
            startup looking to establish a strong online presence or an
            established brand aiming to expand your reach, we have the tools,
            expertise, and passion to make it happen.
          </p>
        </div>
        <div className="w-full flex justify-center place-items-center">
          <Image src={aboutImg} alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default About;
