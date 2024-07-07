import Link from "next/link";
import logo from "../../../assets/logo.svg";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";
import Image from "next/image";
const Navbar = () => {
  const user = false;
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

  const handleLogOutUser = () => {
    logOut()
      .then((res) => {
        // console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

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
          <Link href='/'>
            <Image src={logo} alt="Logo" className="md:w-16 lg:w:24 w-12" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu gap-3 menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5 items-center">
          <Link href={"/cartDetails"}>
            <div className="indicator">
              <HiOutlineShoppingBag className="text-2xl cursor-pointer" />
              <span className="indicator-item badge badge-secondary">0</span>
            </div>
          </Link>
          <CiSearch className="text-2xl cursor-pointer" />
          {user ? (
            <div>
              <Link href='/appointment' className="btn hover:text-white   btn-error btn-outline">Appointment</Link>
              <button
                // onClick={handleLogOutUser}
                className="btn btn-error ml-3 text-white"
              >
                Log out
              </button>
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
