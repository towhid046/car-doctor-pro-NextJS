import Image from "next/image";

const OrderItem = ({ item}) => {
    const { _id, img, service_title, service_price, date, status } = item;
  
    return (
      <tr>
        <th>
          <button
            // onClick={() => handleDeleteOrderItem(_id)}
            className="btn btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
        <td>
          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="rounded-lg w-16 h-16">
                <Image  src={img} alt="Avatar Image"  width={40} height={40}/>
              </div>
            </div>
            <div>
              <div className="font-bold text-lg">{service_title}</div>
              <div className="text-sm opacity-50">Color : Green</div>
              <div className="text-sm opacity-50">Size : S</div>
            </div>
          </div>
        </td>
        <td>
          <span className="font-bold text-base">${service_price}</span>
        </td>
        <td>
          <span className="font-bold text-base">{date}</span>
        </td>
        <th>
          {status === "Confirmed" ? (
            <button className="btn btn-success bg-purple-500 border-none btn-sm">Confirmed</button>
          ) : (
            <button
              // onClick={() => handleUpdateOrder(_id)}
              className="btn btn-error text-white btn-sm"
            >
              {status}
            </button>
          )}
        </th>
      </tr>
    );
  };
  
  export default OrderItem;