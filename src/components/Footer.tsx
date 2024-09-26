import logo from "@/../assets/logo/logo-1.svg";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div id="footer" className="mt-52 flex flex-col gap-3 place-items-center">
      <Image src={logo} alt="logo" />
      <div className="flex justify-center gap-10 mt-6">
        <a
          rel="noopener noreferrer"
          href="https://www.instagram.com/dama__solutions"
          target="_blank"
        >
          <FaInstagram className="text-2xl hover:text-primary duration-100" />
        </a>
        <a
          rel="noopener noreferrer"
          href="https://www.facebook.com/people/Dama-Solutions/61564291407434/"
          target="_blank"
        >
          <FaFacebookF className="text-2xl hover:text-primary duration-100" />
        </a>
        <FaTiktok className="text-2xl hover:text-primary duration-100" />
        <a
          rel="noopener noreferrer"
          href="https://www.linkedin.com/company/damasolutions/posts"
          target="_blank"
        >
          <FaLinkedin className="text-2xl hover:text-primary duration-100" />
        </a>
      </div>
      <a
        href="tel:+251905398793"
        className="flex gap-2 my-3 hover:text-primary place-items-center font-normal"
      >
        <FaPhone />
        <div>+25105398793</div>
      </a>
      <div className="mt-6 border-t border-gray-700 w-full text-center py-5 mx-auto text-sm text-dim">
        Copyright © 2024 Insafe Safety Solutions PLC
      </div>
    </div>
  );
};

export default Footer;
