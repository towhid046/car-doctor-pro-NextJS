import Image from "next/image";
import PropTypes from "prop-types";
const TeamMember = ({ member }) => {
  const { img, name, profession, socialLinks } = member;

  return (
    <div className="border p-5 flex flex-col justify-between rounded-xl">
      <figure className="rounded-xl mb-5 ">
        <Image className="rounded-xl w-full " width={300} height={250} src={img} alt="" />
      </figure>
      <div className="space-y-2 text-center">
        <h2 className="text-2xl font-bold">{name}</h2>
        <p>{profession}</p>
        <ul className="flex items-center gap-3 justify-center">
          {socialLinks.map((link, i) => (
            <li className="text-2xl btn rounded-full w-14 h-14" key={i}>{link}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

TeamMember.propTypes = {
  member: PropTypes.object.isRequired,
};
export default TeamMember;