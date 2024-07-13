import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import member1 from "../../../assets/images/team/1.jpg";
import member2 from "../../../assets/images/team/2.jpg";
import member3 from "../../../assets/images/team/3.jpg";

import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter, FaSquareInstagram } from "react-icons/fa6";
import TeamMember from './TeamMember/TeamMember';


const TeamMembers = () => {
  const members = [
    {
      id: 1,
      img: member1,
      name: "Jon Doe",
      profession: "Engine Expert",
      socialLinks: [
        <FaFacebook key={1}/>,
        <FaSquareXTwitter key={2} />,
        <FaLinkedin key={3}/>,
        <FaSquareInstagram  key={4}/>,
      ],
    },
    {
      id: 2,
      img: member2,
      name: "Pitter Ho",
      profession: "Engine Expert",
      socialLinks: [
        <FaFacebook key={1}/>,
        <FaSquareXTwitter key={2} />,
        <FaLinkedin key={3}/>,
        <FaSquareInstagram  key={4}/>,
      ],
    },
    {
      id: 3,
      img: member3,
      name: "Alian Khan",
      profession: "Engine Specilist",
      socialLinks: [
        <FaFacebook key={1}/>,
        <FaSquareXTwitter key={2} />,
        <FaLinkedin key={3}/>,
        <FaSquareInstagram  key={4}/>,
      ],
    },
  ];

  return (
    <section className="py-12">
      <div className="text-center">
        <SectionHeading
          name="Team"
          title="Meet Our Team"
          description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {members.map((member) => (
          <TeamMember key={member.id} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;