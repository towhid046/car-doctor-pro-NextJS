import { FaGoogle, FaGithub } from "react-icons/fa";
const SocialLogin = () => {
  return (
    <div className="flex items-center justify-center  gap-3">
      <button className="btn h-12 w-12 rounded-full">
        <FaGithub className="text-blue-500 text-2xl" />
      </button>
      <button className="btn h-12 w-12 rounded-full">
        <FaGoogle className=" text-2xl" />
      </button>
    </div>
  );
};

export default SocialLogin;
