"use client";

import { useState } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: "https://i.ibb.co/5j7c8n7/1.jpg",
      title: "Affordable Price For Car Servicing",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority",
    },
    {
      id: 2,
      image: "https://i.ibb.co/QfYQ9L3/2.jpg",
      title: "Affordable Price For Car Servicing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      image: "https://i.ibb.co/TBhjNqg/3.jpg",
      title: "Affordable Price For Car Servicing",
      description:
        "Contrary to popular belief, Lorem Ipsum is not simply random text.",
    },
    {
      id: 4,
      image: "https://i.ibb.co/qxvyRDs/4.jpg",
      title: "Affordable Price For Car Servicing",
      description:
        'Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus',
    },
    {
      id: 5,
      image: "https://i.ibb.co/84gnDZz/5.jpg",
      title: "Affordable Price For Car Servicing",
      description:
        "The standard chunk of Lorem Ipsum used since the 1500s is reproduced",
    },
    {
      id: 6,
      image: "https://i.ibb.co/x89qmSC/6.jpg",
      title: "Affordable Price For Car Servicing",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="mx-auto container px-4 min-h-[70vh]">
      <div className=" relative">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={` absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="relative bg-cover bg-no-repeat bg-center rounded-lg w-full"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="flex flex-col lg:justify-start justify-center lg:max-w-lg py-24 space-y-6 text-white bg-gradient-to-r from-[rgb(21,21,21)] to-[#01010101] lg:pl-20 px-8 lg:text-left text-center rounded-lg">
                <h2 className="md:text-5xl text-3xl font-bold ">
                  {slide.title}
                </h2>
                <p>{slide.description}</p>
                <div className="flex items-center gap-5 lg:justify-start justify-center">
                  <button className="btn btn-error text-white">Discover More</button>
                  <button className="btn btn-outline text-white">
                    Latest project
                  </button>
                </div>
              </div>
              <div className=" absolute right-10  bottom-12">
                <button
                  onClick={prevSlide}
                  className="btn btn-circle btn-error mr-4"
                >
                  <GoArrowLeft className="text-xl text-white"/>
                </button>
                <button
                  onClick={nextSlide}
                  className="btn btn-circle btn-error"
                >
                  <GoArrowRight className="text-xl text-white"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
