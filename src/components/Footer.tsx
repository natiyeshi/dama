import logo from "@/../assets/logo/logo-1.svg";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div id="footer" className="mt-52 flex flex-col gap-3 place-items-center">
      <Image src={logo} alt="logo" />
      <div className="flex justify-center gap-10 mt-6">
        <FaInstagram className="text-2xl hover:text-primary duration-100" />
        <FaFacebookF className="text-2xl hover:text-primary duration-100" />
        <FaTiktok className="text-2xl hover:text-primary duration-100" />
        <FaLinkedin className="text-2xl hover:text-primary duration-100" />
      </div>
      <div className="mt-6 mx-auto text-sm text-dim">Copyright © 2024 Insafe Safety Solutions PLC</div>
    </div>
  );
};

export default Footer;
