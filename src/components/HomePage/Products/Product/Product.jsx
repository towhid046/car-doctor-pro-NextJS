import Image from "next/image";
import PropTypes from "prop-types";
const Product = ({ product }) => {
  const { img, title, rating, price } = product;
  return (
    <div className="p-5 rounded-xl border flex flex-col justify-between">
      <figure className="flex justify-center items-center w-full h-[220px] bg-gray-200 mb-5 rounded-xl p-5">
        <Image width={156} height={156} src={img} alt={title} />
      </figure>
      <div className="space-y-2 text-center">
        <div className="flex justify-center list-none items-center">
          {rating.map((rate, i) => (
            <li className="text-xl text-yellow-500" key={i}>{rate}</li>
          ))}
        </div>
        <h2 className="text-2xl font-bold">{title}</h2>
        <p className="text-xl font-bold text-red-400">${price}.00</p>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;