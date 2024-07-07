import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

import { IoMdStar } from "react-icons/io";

import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import Review from './Review/Review';

const reviews = [
  {
    id: 2,
    author: {
      img: "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      name: "Kamal Salah",
      profession: "Businessman",
    },
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    rating: [
      <IoMdStar />,
      <IoMdStar />,
      <IoMdStar />,
      <IoMdStar />,
      <IoMdStar />,
    ],
  },
  {
    id: 3,
    author: {
      img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Billah Islam",
      profession: "Businessman",
    },
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />, <IoMdStar />],
  },
  {
    id: 4,
    author: {
      img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Jon Doe",
      profession: "Businessman",
    },
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    rating: [<IoMdStar />, <IoMdStar />, <IoMdStar />],
  },
  {
    id: 1,
    author: {
      img: "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=400",
      name: "Jon Doe",
      profession: "Businessman",
    },
    text: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.`,
    rating: [
      <IoMdStar />,
      <IoMdStar />,
      <IoMdStar />,
      <IoMdStar />,
      <IoMdStar />,
    ],
  },
];

const Reviews = () => {
  return (
    <section className="py-12">
      <div className="text-center">
        <SectionHeading
          name="Testimonial"
          title="What Customer Says"
          description="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
        />
      </div>
      <div>
        <Swiper
          slidesPerView={2}
          spaceBetween={20}
          navigation={true}
          pagination={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Navigation, Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <Review review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;