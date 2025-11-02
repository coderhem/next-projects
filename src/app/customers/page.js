"use client";
import React, { useEffect, useState } from "react";

const Customers = () => {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);

 // 🟦 Fetch all users
 const fetchUsers = async () => {
  try {
   const res = await fetch("/api/users");
   const data = await res.json();
   setUsers(data);
  } catch (err) {
   console.error("Fetch error:", err);
  } finally {
   setLoading(false);
  }
 };

 useEffect(() => {
  fetchUsers();
 }, []);

 // 🟥 Delete user
 const handleDelete = async (id) => {
  if (!confirm("Are you sure you want to delete this user?")) return;

  const res = await fetch("/api/users", {
   method: "DELETE",
   headers: { "Content-Type": "application/json" },
   body: JSON.stringify({ id }), // send id in request body
  });

  const data = await res.json();

  if (res.ok) {
   alert(data.message);
   setUsers(users.filter((user) => user._id !== id));
  } else {
   alert("Error: " + data.message);
  }
 };

 // Function to update a user and refresh the table automatically
 const handleUpdate = async (updatedUser) => {
  // updatedUser should be an object containing: id, name, email, phone, gender, bloodGroup, address, password (if needed)
  try {
   const res = await fetch("/api/users", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedUser),
   });

   const data = await res.json();

   if (res.ok) {
    alert(data.message);

    //Update the state so table shows changes immediately
    setUsers((prevUsers) =>
     prevUsers.map((user) =>
      user._id === updatedUser.id ? data.user : user
     )
    );
   } else {
    alert(data.error || "Failed to update user");
   }
  } catch (err) {
   console.error("Update error:", err);
   alert("An error occurred while updating the user");
  }
 };


 if (loading)
  return (
   <p className="text-center bg-primary/10 py-10 text-red">
    Loading users...
   </p>
  );

 return (
  <div className="container mx-auto p-6">
   <h2 className="text-2xl mb-4 text-secondary">Our Customers</h2>

   {users.length === 0 ? (
    <p>No users found.</p>
   ) : (
    <div className="customer-table overflow-x-auto">
     <table className="w-full border">
      <thead>
       <tr className="bg-gray-100 text-left">
        <th className="p-2">S.No</th>
        <th className="p-2">Name</th>
        <th className="p-2">Email</th>
        <th className="p-2">Phone</th>
        <th className="p-2">Gender</th>
        <th className="p-2">Blood Group</th>
        <th className="p-2">Address</th>
        <th className="p-2">Created At</th>
        <th className="p-2">Actions</th>
       </tr>
      </thead>

      <tbody>
       {users.map((user) => (
        <tr key={user._id} className="text-center border-b">
         <td className="p-2"></td>
         <td className="p-2">{user.name}</td>
         <td className="p-2">{user.email}</td>
         <td className="p-2">{user.phone}</td>
         <td className="p-2">{user.gender}</td>
         <td className="p-2">{user.bloodGroup}</td>
         <td className="p-2">{user.address}</td>
         <td className="p-2">
          {new Date(user.createdAt).toLocaleString()}
         </td>
         <td>
          <button onClick={() => handleUpdate(user._id)} className="bg-green-700 size-7 mr-3 hover:bg-green-600 inline-flex justify-center items-center text-white rounded cursor-pointer">
           <i className="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button
           onClick={() => handleDelete(user._id)}
           className="bg-red-600 hover:bg-red-500 size-7 text-white rounded inline-flex justify-center items-center cursor-pointer"
          >
           <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
         </td>
        </tr>
       ))}
      </tbody>
     </table>
    </div>
   )}
  </div>
 );
};

export default Customers;
