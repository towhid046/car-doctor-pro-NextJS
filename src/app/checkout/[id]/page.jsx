"use client"
import {useEffect, useState} from 'react'
import { useSession } from 'next-auth/react';
import checkOutImg from "../../../assets/images/checkout/checkout.png";
import PageHeader from "../../../components/shared/PageHeader/PageHeader";
import LoadingSpinner from './../../../components/shared/LoadingSpinner/LoadingSpinner';

const CheckoutPage =  ({ params }) => {

  const [service, setService] = useState({})
  const [loading, setLoading] = useState(true);

  const session = useSession()

    useEffect(()=>{
      const loadService = async () => {
try {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/services/${params?.id}`
  );
  const data =  await res.json();
  setService(data)

} catch (error) {
console.error(error.message)
return []
}finally{
  setLoading(false)
}
      };
      loadService()
    },[params])

  const { title, _id, price, img } = service;

  const handleBooking = async(e) => {
    e.preventDefault();
    const form = e.target;

    const name = session?.data?.user?.name;
    const email = session?.data?.user?.email;
    const phone = form.phone.value;
    const date = form.date.value;
    const address = form.address.value;

    const newBooking = {
      name,
      email,
      phone,
      date,
      service_title: title,
      img,
      service_id: _id,
      service_price: price,
      address,
      status: 'Confirm',
    };

    // send post request to save new booking
  try{
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/post_booking`, {
      method: 'POST',
      body: JSON.stringify(newBooking),
      headers: {'Content-Type': 'application/json'}
    })
    const result = await res.json()
    if(result.insertedId){
      alert('Service have been booked successfully')
      form.reset()
    }
  }catch(err){
    console.error(err.message)
  }


  };

  if(loading){
    return <LoadingSpinner/>
  }

  return (
    <section className="py-12 container mx-auto px-4">
      <PageHeader bgUrl={checkOutImg} title={`Check Out for ${title}`} />
      <div className="bg-gray-100 lg:p-16 md:p-8 p-4 rounded-xl">
        <form
          onSubmit={handleBooking}
          className="grid grid-cols-1 md:grid-cols-2 gap-5"
        >
          <div>
            <label htmlFor="">
              <strong>Name</strong>
              <input
                type="text"
                name="name"
                placeholder="Name"
                defaultValue={session?.data?.user?.name}
                readOnly
                className="input border-none focus:outline-none w-full"
                required

              />
            </label>
          </div>
          <div>
            <label htmlFor="">
              <strong>Email</strong>
              <input
                type="email"
                name="email"
                readOnly
                defaultValue={session?.data?.user?.email}
                placeholder="Your Email"
                className="input border-none focus:outline-none w-full"
                required

              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <strong>Phone</strong>
              <input
                type="nuber"
                name="phone"
                placeholder="Your Phone"
                className="input border-none outline-none input-bordered w-full"
                required
              />
            </label>
          </div>
          
          <div>
            <label htmlFor="">
              <strong>Date</strong>
              <input
                type="date"
                name="date"
                className="input input-bordered  border-none outline-none w-full"
                required

              />
            </label>
          </div>

          <div>
            <label htmlFor="">
              <strong>Price</strong>
              <input
                type="text"
                name="price"
                defaultValue={`$ ${price}`}
                placeholder="Price"
                readOnly
                className="input border-none focus:outline-none w-full"
                required
              />
            </label>
          </div>

          
          <div className="w-full ">
            <label htmlFor="">
              <strong>Address</strong>
              <textarea
                name="address"
                className="textarea text-base border-none outline-none textarea-bordered textarea-md w-full"
                placeholder="Your Address "
                rows="1"
                required
              ></textarea>
            </label>
          </div>
          <input
            type="submit"
            value="Order Confirm"
            className="btn btn-error w-full md:col-span-2"
          />
        </form>
      </div>
    </section>
  );
};

export default CheckoutPage;