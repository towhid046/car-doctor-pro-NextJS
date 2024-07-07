"use client";
import loginImg from "../../assets/images/login/login.svg";
import Link from "next/link";
import Image from "next/image";
import SocialLogin from "./../../components/shared/SocialLogin/SocialLogin";

const RegisterPage = () => {
  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };

    if (!user) {
      return alert("Please fill all input");
    }

    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register/api`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );
      const data = await res.json();
      if (data.status === 200) {
        form.reset();
        alert("Account created successfully!!");
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <section className="container mx-auto px-4 py-10 flex-col-reverse lg:flex-row flex items-center justify-between lg:gap-10 gap-8">
      <div className="lg:w-1/2">
        <Image width={460} height={502} src={loginImg} alt="" />
      </div>
      <div className="border p-10 rounded-lg lg:w-1/2">
        <form onSubmit={handleRegister} className="space-y-5">
          <h2 className="text-center text-3xl mb-5 font-bold">Sign Up </h2>
          <label htmlFor="">
            <strong>Name</strong>
            <input
              type="text"
              className="input input-bordered w-full"
              name="name"
              placeholder="Your Name"
              required
            />
          </label>{" "}
          <br /> <br />
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
          <p className="text-center">Or Sign up with</p>
          <SocialLogin />
          <p className="mt-12 text-center">
            Already have an account?{" "}
            <Link href={"/login"} className="text-red-400 font-bold">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default RegisterPage;
