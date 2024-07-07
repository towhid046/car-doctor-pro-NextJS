import SectionHeading from "./../../shared/SectionHeading/SectionHeading";
import product1 from "../../../assets/images/products/1.png";
import product2 from "../../../assets/images/products/2.png";
import product3 from "../../../assets/images/products/3.png";
import product4 from "../../../assets/images/products/4.png";
import product5 from "../../../assets/images/products/5.png";
import product6 from "../../../assets/images/products/6.png";

import { MdOutlineStarPurple500 } from "react-icons/md";
import Product from "./Product/Product";

const Products = () => {
  const products = [
    {
      id: 1,
      img: product1,
      rating: [
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
      ],
      title: "Car Engine Plug",
      price: 20,
    },
    {
      id: 2,
      img: product2,
      rating: [
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
      ],
      title: "Air Filter",
      price: 15,
    },
    {
      id: 3,
      img: product3,
      rating: [
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
      ],
      title: "Spark Plug",
      price: 10,
    },
    {
      id: 4,
      img: product4,
      rating: [
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
        <MdOutlineStarPurple500 />,
      ],
      title: "Oil Filter",
      price: 12,
    },
    {
      id: 5,
      img: product5,
      rating: [<MdOutlineStarPurple500 />, <MdOutlineStarPurple500 />],
      title: "Brake Pads",
      price: 25,
    },
    {
      id: 6,
      img: product6,
      rating: [<MdOutlineStarPurple500 />],
      title: "Wiper Blades",
      price: 18,
    },
  ];

  return (
    <section className="py-12 container mx-auto px-4">
      <div className="text-center">
      <SectionHeading
        name="Popular Products"
        title="Browse Our Products"
        description={`the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `}
      />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
      <div className="text-center py-7">
        <button className="btn btn-outline btn-error">More Products</button>
      </div>
    </section>
  );
};

export default Products;