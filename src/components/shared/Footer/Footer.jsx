

import Image from "next/image";
import Link from "next/link";
import logo from "../../../assets/logo.svg";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoLogoGoogle } from "react-icons/io";
const Footer = () => {
  const socialIcons = [
    <IoLogoGoogle key={1}/>,
    <FaLinkedin  key={2}/>,
    <FaInstagram  key={3}/>,
    <FaXTwitter key={4}/>,
  ];

  const supports = [
    { name: "Support Center", url: "/support-center" },
    { name: "Feedback", url: "/support-center" },
    { name: "Accesbility", url: "/support-center" },
  ];

  const abouts = [
    { name: "Home", url: "/" },
    { name: "Service", url: "/service" },
    { name: "Contact", url: "/contact" },
  ];
  const services = [
    { name: "Why Car Doctor", url: "/login" },
    { name: "About", url: "/about" },
  ];

  return (
    <footer className="bg-[#151515]">
      <div className="footer container mx-auto px-4 p-10 text-neutral-content">
        <div className="max-w-xs">
          <Link href="/">
            <Image src={logo} alt="Logo" className="md:w-16 lg:w:24 w-12" />
          </Link>
          <p>
            Edwin Diaz is a software and web technologies engineer, a life coach
            trainer who is also a serial .
          </p>
          <ul className="mt-4 flex gap-3 text-xl items-center text-blue-400">
            {socialIcons.map((icon, index) => (
              <li
                className="cursor-pointer btn rounded-full h-12 w-12 bg-[#2d2d2d] text-white text-xl hover:text-red-500 border-none "
                key={index}
              >
                {icon}
              </li>
            ))}
          </ul>
        </div>

        <nav>
          <h6 className="footer-title text-lg">About</h6>
          {abouts.map((link, index) => (
            <Link href={link.url} key={index} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title text-lg">Company</h6>
          {services.map((link, index) => (
            <Link href={link.url} key={index} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>

        <nav>
          <h6 className="footer-title text-lg">Support</h6>
          {supports.map((link, index) => (
            <Link href={link.url} key={index} className="link link-hover">
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
