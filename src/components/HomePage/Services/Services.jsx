"use client";

import SectionHeading from "../../shared/SectionHeading/SectionHeading";
import Service from "./Service/Service";
import { useEffect, useState } from "react";
import LoadingSpinner from "./../../shared/LoadingSpinner/LoadingSpinner";
import Link from "next/link";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/services`
        );
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.error(error.message);
        return [];
      } finally {
        setLoading(false);
      }
    };
    loadData();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="text-center">
        <SectionHeading
          name="Service"
          title="Our Service Area"
          description={`The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`}
        />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services?.map((service) => (
          <Service key={service._id} service={service} />
        ))}
      </div>
      <div className="text-center py-7">
        <Link href="/services">
          <button className="btn btn-outline btn-error">More Services</button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
