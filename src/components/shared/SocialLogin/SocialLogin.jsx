"use client";
import { FaGoogle, FaGithub } from "react-icons/fa";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const SocialLogin = () => {
  const session = useSession();
  const router = useRouter();
  const handleSocialLogin = (provider) => {
    signIn(provider, { redirect: false });
  };

  if (session?.status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="flex items-center justify-center  gap-3">
      <button
        onClick={() => handleSocialLogin("github")}
        className="btn h-12 w-12 rounded-full"
      >
        <FaGithub className="text-blue-500 text-2xl" />
      </button>
      <button
        onClick={() => handleSocialLogin("google")}
        className="btn h-12 w-12 rounded-full"
      >
        <FaGoogle className=" text-2xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
