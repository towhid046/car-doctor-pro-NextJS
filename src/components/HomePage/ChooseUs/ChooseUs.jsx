import group from "../../../assets/icons/group.svg";
import watch from "../../../assets/icons/deliveryt.svg";
import support from "../../../assets/icons/person.svg";
import equipment from "../../../assets/icons/Wrench.svg";
import guranty from "../../../assets/icons/check.svg";
import deliverity from "../../../assets/icons/deliveryt.svg";
import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import Image from "next/image";

const chooses = [
  { id: 1, icon: group, title: "Expert Team" },
  { id: 2, icon: watch, title: "Timely Delivery" },
  { id: 3, icon: support, title: "24/7 Support" },
  { id: 4, icon: equipment, title: "Best Equipment" },
  { id: 5, icon: guranty, title: "100% Guranty" },
  { id: 6, icon: deliverity, title: "Timely Delivery" },
];

const ChooseUs = () => {
  return (
    <section className="py-12 container mx-auto px-4">
      <div className="text-center">
        <SectionHeading
          name="Core Features"
          title="Why Choose Us"
          description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {chooses.map((choose) => (
          <div
            key={choose.id}
            className="hover:bg-red-400 transition hover:text-white p-4 py-6 border rounded-lg flex flex-col justify-center"
          >
            <figure className="flex justify-center">
              <Image width={55} height={55} src={choose.icon} alt="Choose Icon" />
            </figure>
            <h2 className="text-lg text-center font-bold mt-5">
              {choose.title}
            </h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChooseUs;