import React from "react";
import { useQuery } from "react-query";
import User from "./User";

const AllUser = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["alluser"],
    queryFn: async () => {
      const res = await fetch("https://e-server-eta.vercel.app/user");
      const data = await res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>
    );
  }
  return (
    <div>
      <h2 className="text-3xl">All User</h2>{" "}
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th>Vendor Status</th>
              <th>Delete</th>
            </tr>
          </thead>
          {users.map((user, index) => (
            <User user={user} index={index} key={user._id} refetch={refetch} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default AllUser;
