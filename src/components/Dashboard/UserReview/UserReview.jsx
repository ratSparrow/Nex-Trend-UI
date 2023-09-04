import React from "react";
import { useQuery } from "react-query";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const UserReview = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.email);
  const email = user.email;
  const {
    data: orders = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const result = await fetch(`https://e-server-eta.vercel.app/order/`);
      const data = await result.json();
      return data;
    },
  });
  if (isLoading) {
    return <progress className="progress w-56"></progress>;
  }

  console.log(orders);

  return (
    <div>
      <h2 className="text-3xl text-orange-600 my-10 text-center font-serif font-semibold ">
        <span className="border-b-2 border-orange-600 ">ORDER LIST</span>
      </h2>
      <div className="overflow-x-auto mb-10">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Transaction ID</th>
            </tr>
          </thead>
          {orders.map((order, index) => (
            <tbody>
              <tr>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email} </td>
                <td>${order.price.toFixed(2)}</td>
                <td>{order.transactionId}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default UserReview;
