import { CiCalendar } from "react-icons/ci";
import { BsTelephoneForward } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
const Contact = () => {
  const contacts = [
    {
      id: 1,
      icon: <CiCalendar />,
      title: "We are open monday-friday",
      info: "7:00 am - 9:00 pm",
    },
    {
      id: 2,
      icon: <BsTelephoneForward />,
      title: "Have a question?",
      info: "+2546251 2658",
    },
    {
      id: 3,
      icon: <CiLocationOn />,
      title: "Need a repair? our address",
      info: "Liza Street, New York",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="text-white bg-[#151515] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-20 lg:px-16 rounded-xl md:px-10 px-6 md:gap-12 gap-6 ">
      {contacts.map((contact) => (
        <div key={contact.id} className="flex items-center gap-5">
          <figure className="text-3xl text-red-500">
            {contact.icon}
          </figure>
          <div>
            <p>{contact.title}</p>
            <h2 className="text-2xl font-bold">{contact.info}</h2>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
};

export default Contact;