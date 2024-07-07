"use client";
import Link from "next/link";
import logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { FaUserCheck } from "react-icons/fa";
import { IoIosLogOut } from "react-icons/io";
import { signOut } from "next-auth/react";

const Navbar = () => {
  const session = useSession();
  const links = (
    <>
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/about"}>About</Link>
      </li>
      <li>
        <Link href={"/services"}>Services</Link>
      </li>
      <li>
        <Link href={"/blog"}>Blog</Link>
      </li>
      <li>
        <Link href={"/contact"}>Contact</Link>
      </li>
    </>
  );

  return (
    <nav className="sticky z-50 top-0 mb-5 shadow-sm bg-white">
      <div className="navbar container mx-auto px-4 bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu gap-3 z-50 menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link href="/">
            <Image src={logo} alt="Logo" className="md:w-16 lg:w:24 w-12" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5 items-center">
          <Link className="inline-block" href={"/cartDetails"}>
            <div className="indicator mt-2">
              <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
              <span className="indicator-item badge badge-secondary">0</span>
            </div>
          </Link>
          <CiSearch className="text-2xl cursor-pointer" />
          {session.data ? (
            <div>
              <details>
                <summary className="list-none cursor-pointer">
                  {session?.data?.user?.image ? (
                    <Image
                    src={session?.data?.user?.image}
                      width={40}
                      height={40}
                      className="rounded-full"
                      alt={session?.data?.user?.name}
                    />
                  ) : (
                    <FaUserCheck className="text-3xl" />
                  )}
                </summary>
                <ul className="absolute text-center right-4 top-16 bg-white py-4 px-8 rounded-lg space-y-2 w-max ">
                  <li>
                    <strong className="text-lg">
                      {session?.data?.user?.name}
                    </strong>
                  </li>
                  <li>
                    <Link
                      className="hover:text-error transition duration-300 "
                      href="/appointment"
                    >
                      Appointment
                    </Link>
                  </li>
                  <li>
                    <button className="hover:text-error transition duration-300 ">
                      Profile
                    </button>
                  </li>
                  <li>
                    <button className="hover:text-error transition duration-300 ">
                      Setting
                    </button>
                  </li>
                  <li className="text-error hover:text-red-500 transition duration-300  flex justify-center gap-5 items-center">
                    <button onClick={() => signOut()}>Log out</button>
                    <IoIosLogOut />
                  </li>
                </ul>
              </details>
            </div>
          ) : (
            <Link href="/login">
              <button className="btn btn-error text-white">Log in</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
