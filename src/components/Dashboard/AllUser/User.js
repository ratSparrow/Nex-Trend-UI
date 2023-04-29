import React from "react";
import { toast } from "react-hot-toast";

const User = ({ user, index, refetch }) => {
  const handleMakeAdmin = (id) => {
    fetch(`http://localhost:5000/user/admin/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Make Admin Successfully");
        refetch();
      });
  };

  const handleVendorStatus = (id) => {
    fetch(`http://localhost:5000/user/vendor/${id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Update as Vendor Successfully");
        refetch();
      });
  };

  const handleDeleteUser = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/user/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("User deleted Successfully");
        refetch();
      });
  };
  return (
    <tbody>
      <tr>
        <th>{index + 1}</th>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>
          {user.role !== "admin" ? (
            <button
              className="btn btn-primary text-white btn-xs"
              onClick={() => handleMakeAdmin(user._id)}
            >
              Make Admin
            </button>
          ) : (
            <h1 className="text-sm font-bold text-orange-500 ">ADMIN</h1>
          )}
        </td>

        <td>
          {user.title !== "vendor" ? (
            <button
              className="btn  btn-primary text-white btn-xs"
              onClick={() => handleVendorStatus(user._id)}
            >
              Update Vendor
            </button>
          ) : (
            <h1 className="text-sm font-bold text-orange-500 ">VENDOR</h1>
          )}
        </td>
        <td>
          <button
            className="btn  btn-danger text-white btn-xs"
            onClick={(id) => handleDeleteUser(user._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default User;
