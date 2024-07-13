import checkOutImg from "../../../assets/images/checkout/checkout.png";
import PageHeader from "../../../components/shared/PageHeader/PageHeader";
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import Link  from 'next/link';

export const metadata = {
  title: 'Details',
  description: "Car servicing web application details",
};

const loadService = async (id) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${id}`
    );
    return await res.json();
  } catch (error) {
    return {}
    
  }
};

const CheckoutPage = async ({ params }) => {
  const service = await loadService(params?.id);

  const { title:service_title, _id, price, img, description, facility } = service;

  return (
    <section className="py-12 container mx-auto px-4">
      <PageHeader bgUrl={checkOutImg} title={`Service Details for ${service_title}`} />
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        <div className="col-span-2">
          <figure className="mb-7">
            <Image
              className="w-full rounded-lg h-[400px]"
              src={img}
              alt={service_title + " Image"}
              width={400}
              height={300}
            />
          </figure>
          <div className="mb-10">
            <div className='mb-7'>
              <h2 className="text-3xl font-bold mb-5">{service_title}</h2>
              <p>{description}</p>
            </div>
            {/* cards */}
            <ul className="grid grid-cols-2 gap-6 mb-7">
              {facility?.map((each, index) => (
                <li
                  key={index}
                  className="px-7 py-12 bg-base-200 rounded-lg border-t-2 border-red-800 "
                >
                  <h4 className="text-xl font-bold mb-2">{each.name}</h4>
                  <p>{each.details}</p>
                </li>
              ))}
            </ul>
            <p>{description}</p>
          </div>

          {/*3 Simple Steps to Process  */}
          <div>
            <div className='mb-7'>
              <h2 className="text-3xl font-bold mb-5">
                3 Simple Steps to Process
              </h2>
              <p>
               {description}
              </p>
            </div>
            <ul className="grid grid-cols-3 gap-5 mb-5">
              {steps?.map((item) => (
                <li
                  key={item.id}
                  className="px-7 py-12 rounded-lg border-t-4 space-y-2 border-base-200"
                >
                  <div className="flex justify-center">
                    <div className="bg-red-400 rounded-full p-3 border-4 border-red-200">
                      <span className="text-2xl font-bold text-white">{`0${item.id}`}</span>
                    </div>
                  </div>
                  <div className="text-center">
                    <h4 className="text-xl font-bold uppercase">{item.step}</h4>
                    <p>{item.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <aside className="col-span-1">
        <div>
        <div className='p-7 rounded-lg bg-gray-200 mb-6'>
            <h3 className='text-xl font-bold mb-4'>Services</h3>
           <ul className='space-y-3'>
            {services?.map((service, index)=>(
              <li key={index}
              className={`w-full flex justify-between hover:bg-red-400 hover:text-white shadow-none btn  ${service_title === service ? 'bg-red-400 text-white' : 'bg-base-100'}`}
              >
                <span>
                  {service}
                  </span>
              <span>
              <FaArrowRightLong/>
              </span>
              </li>
            ))}
           </ul>

        </div>
        <div>
          <h2 className='text-2xl font-bold mb-2'>Price ${price}</h2>
          <Link
          href={`/checkout/${_id}`}
          className='btn btn-error text-white w-full'
          >
          <button >
            Proceed Checkout
          </button>
          </Link>
        </div>
    </div>
        </aside>
      </div>
    </section>
  );
};

const steps = [
  {
    id: 1,
    step: "STEP ONE",
    description: "It Uses A Dictionary Of Over 200",
  },
  {
    id: 2,
    step: "STEP TWO",
    description: "It Uses A Dictionary Of Over 200",
  },
  {
    id: 3,
    step: "STEP THREE",
    description: "It Uses A Dictionary Of Over 200",
  },
];

const services = [
  "Full car Repair",
  "Engine Repair",
  "Engine Oil Change",
  "Electrical System",
  "Battery Charge",
  "Automatic Services",
]

export default CheckoutPage;