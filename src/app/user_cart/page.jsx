"use client";
import PageHeader from "./../../components/shared/PageHeader/PageHeader";
import carDetailBgImg from "../../assets/images/user_cart/user_cart_banner.png";
import OrderItem from './../../components/unique/OrderItem/OrderItem';
import { useSession } from 'next-auth/react';
import { useState, useEffect } from "react";
import LoadingSpinner from './../../components/shared/LoadingSpinner/LoadingSpinner';
import swal from 'sweetalert';

const UserCart = () => {
  const [orderItems, setOrderItems] = useState([]);
  const [loading, setLoading] = useState(true)
  const session = useSession()

  const loadData = async()=>{
    if(!session?.data?.user?.email){
        return <LoadingSpinner/>
    }
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/get_a_user_bookings/${session?.data?.user?.email}`);
        const data = await res.json()
        setOrderItems(data)
    } catch (error) {
        console.error(error.message)
        return[]
    }finally{
        setLoading(false)
    }
 }


  useEffect(() => {
     loadData()
  }, [session?.data?.user?.email]);


  const handleDeleteOrderItem = (id) => {
    swal({
      title: "Are you sure?",
      text: "Want to delete this booking!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/delete_a_booking/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
                loadData()
            }
          });
      }
    });
  };

//   const handleUpdateOrder = (id) => {
//     fetch(`http://localhost:5000/orders/${id}`, {
//       method: "PATCH",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ status: "Confirmed" }),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         if (data.acknowledged) {
//           const reminigItems = orderItems.filter((item) => item._id !== id);
//           const updatedItem = orderItems.find((item) => item._id === id);
//           updatedItem.status = "Confirmed";
//           const newItems = [updatedItem, ...reminigItems];
//           setOrderItems(newItems);
//         }
//       });
//   };

if(loading){
    return <LoadingSpinner/>
}



  return (
    <section className="min-h-screen py-12 container mx-auto px-4">
      <PageHeader bgUrl={carDetailBgImg} title={"Cart Details"} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            <tbody>
              {orderItems.map((item) => (
                <OrderItem
                  key={item._id}
                  handleDeleteOrderItem={handleDeleteOrderItem}
                //   handleUpdateOrder={handleUpdateOrder}
                  item={item}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default UserCart;