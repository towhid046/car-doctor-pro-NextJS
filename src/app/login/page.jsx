"use client";
import Image from "next/image";
import loginImg from "../../assets/images/login/login.svg";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import SocialLogin from "./../../components/shared/SocialLogin/SocialLogin";


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
              required
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
              required
            />
          </label>
          <input
            type="submit"
            value="Sign In"
            className="btn btn-error w-full"
          />
        </form>
        <div className='space-y-3'>
          <p className="text-center">Or Sign In with</p>
          <SocialLogin />
          <p className="mt-12 text-center">
            Have not an account?{" "}
            <Link href={"/register"} className="text-red-400 font-bold">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
