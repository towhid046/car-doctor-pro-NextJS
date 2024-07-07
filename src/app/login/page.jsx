"use client";
import Image from "next/image";
import loginImg from "../../assets/images/login/login.svg";
import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res.status === 200) {
      router.push("/");
    }
  };

  return (
    <section className="container mx-auto px-4 py-10 flex-col-reverse lg:flex-row flex items-center justify-between lg:gap-10 gap-8">
      <div className="lg:w-1/2">
        <Image
          width={460}
          height={502}
          className=""
          src={loginImg}
          alt="Login Image"
        />
      </div>
      <div className="border p-10 rounded-lg lg:w-1/2">
        <form onSubmit={handleLogin} className="space-y-5">
          <h2 className="text-center text-3xl mb-5 font-bold">Login </h2>
          <label htmlFor="">
            <strong>Email</strong>
            <input
              type="email"
              className="input input-bordered w-full"
              name="email"
              placeholder="Your email"
            />
          </label>{" "}
          <br /> <br />
          <label htmlFor="">
            <strong>Password</strong>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full"
            />
          </label>
          <input
            type="submit"
            value="Sign In"
            className="btn btn-error w-full"
          />
          <p className="text-center">Or Sign In with</p>
          <ul className="flex items-center justify-center  gap-3">
            <li className="btn h-12 w-12 rounded-full">
              <FaFacebookF className="text-blue-500 text-xl" />
            </li>
            <li className="btn h-12 w-12 rounded-full">
              <FaLinkedinIn className="text-blue-500 text-xl" />
            </li>
            <li className="btn h-12 w-12 rounded-full">
              <FaGoogle className=" text-2xl" />
            </li>
          </ul>
          <p className="mt-12 text-center">
            Have not an account?{" "}
            <Link href={"/register"} className="text-red-400 font-bold">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default LoginPage;
