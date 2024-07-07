import Image from "next/image";
// import quote from "../../../assets/icons/quote.svg"
const Review = ({ review }) => {
  const {
    text,
    author: { name, img, profession },
    rating,
  } = review;
  return (
    <div className="p-8 rounded-lg border">
      <div className="flex md:flex-row flex-col items-center gap-12">
        <figure className="flex  items-center gap-4">
          <Image width={60} height={60} className="w-12 rounded-full h-12" src={img} alt="" />
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p>{profession}</p>
          </div>
        </figure>
        {/* <Image width={56} height={56} className="w-20" src={quote} alt="" /> */}
      </div>
      <p>{text}</p>
      <ul className="list-none mt-2 flex items-center text-yellow-500">
        {rating.map((rate, i) => (
          <li className="text-2xl" key={i}>{rate}</li>
        ))}
      </ul>
    </div>
  );
};

export default Review;