"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Customers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [confirmDelete, setConfirmDelete] = useState({ show: false, id: null });
  const [editUser, setEditUser] = useState(null);

  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      // After 2 minutes → logout
      fetch("/api/logout", { method: "POST" });
      router.push("/login");
    }, 120000); // 2 minutes = 120,000 ms

    return () => clearTimeout(timer);
  }, [router]);

  // Fetch users
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

  // Delete user
  const handleDelete = async (id) => {
    const res = await fetch("/api/users", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    const data = await res.json();
    if (res.ok) setUsers((prev) => prev.filter((u) => u._id !== id));
    else alert("Error: " + data.message);
  };

  const openConfirmModal = (id) => setConfirmDelete({ show: true, id });
  const closeConfirmModal = () => setConfirmDelete({ show: false, id: null });
  const confirmDeleteUser = () => {
    handleDelete(confirmDelete.id);
    closeConfirmModal();
  };

  // Open update modal
  const handleUpdate = (user) => setEditUser({ ...user });

  // Save updated user
  const handleSave = async () => {
    try {
      const res = await fetch("/api/users", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editUser._id,
          name: editUser.name,
          email: editUser.email,
          phone: editUser.phone,
          gender: editUser.gender,
          bloodGroup: editUser.bloodGroup,
          address: editUser.address,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setUsers((prev) =>
          prev.map((u) =>
            u._id === editUser._id ? { ...u, ...editUser } : u
          )
        );
        setEditUser(null);
      } else {
        alert(data?.error || "Failed to update user");
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
        <div className="bg-red/5 text-red p-5">
          <p>No users found.</p>
        </div>
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
                <th className="p-2">Password</th>
                <th className="p-2">Address</th>
                <th className="p-2">Created At</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(users) && users.length > 0 ? (
                users.map((user, index) =>
                  user ? (
                    <tr key={user._id || index} className="text-center border-b">
                      <td className="p-2"></td>
                      <td className="p-2">{user.name}</td>
                      <td className="p-2">{user.email}</td>
                      <td className="p-2">{user.phone}</td>
                      <td className="p-2">{user.gender}</td>
                      <td className="p-2">{user.bloodGroup}</td>
                      <td className="p-2">{user.password}</td>
                      <td className="p-2">{user.address}</td>
                      <td className="p-2">
                        {user.createdAt
                          ? new Date(user.createdAt).toLocaleString()
                          : "-"}
                      </td>
                      <td>
                        <button
                          onClick={() => handleUpdate(user)}
                          className="bg-green-700 size-7 [&_i]:text-md mr-2 hover:bg-green-600 inline-flex justify-center items-center text-white rounded cursor-pointer"
                        >
                          <i className="fa fa-pencil" aria-hidden="true"></i>
                        </button>
                        <button
                          onClick={() => openConfirmModal(user._id)}
                          className="bg-red-600 hover:bg-red-500 size-7 [&_i]:text-md text-white rounded inline-flex justify-center items-center cursor-pointer"
                        >
                          <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                      </td>
                    </tr>
                  ) : null
                )
              ) : (
                <tr>
                  <td colSpan="9" className="text-center py-4">
                    No valid users found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* 🟨 Delete Confirmation Popup */}
      {confirmDelete.show && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-lg px-6 py-10 w-[90%] max-w-md text-center">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">
              Are you sure you want to delete this user?
            </h3>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmDeleteUser}
                className="bg-red-600 transition-all duration-300 hover:bg-red-700 cursor-pointer text-white px-4 py-2 rounded-lg"
              >
                Yes, Delete
              </button>
              <button
                onClick={closeConfirmModal}
                className="bg-gray-300 transition-all duration-300 hover:bg-gray-400 cursor-pointer text-gray-800 px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 🟦 Edit Modal */}
      {editUser && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-xl shadow-lg px-6 py-8 w-[90%] max-w-xl">
            <h3 className="text-lg font-semibold mb-4 text-gray-800 text-center">
              Update User
            </h3>

            <div className="space-y-3">
              <input
                type="text"
                value={editUser.name || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, name: e.target.value })
                }
                placeholder="Enter name"
                className="form-control !text-black"
              />

              <input
                type="email"
                value={editUser.email || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, email: e.target.value })
                }
                placeholder="Enter email"
                className="form-control !text-black"
              />

              <input
                type="text"
                value={editUser.phone || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, phone: e.target.value })
                }
                placeholder="Enter phone"
                className="form-control !text-black"
              />

              <select
                value={editUser.gender || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, gender: e.target.value })
                }
                className="form-control !text-black"
              >
                <option value="">Select gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>

              <select
                value={editUser.bloodGroup || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, bloodGroup: e.target.value })
                }
                className="form-control !text-black"
              >
                <option value="">Select Blood Group</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              <input
                type="text"
                value={editUser.address || ""}
                onChange={(e) =>
                  setEditUser({ ...editUser, address: e.target.value })
                }
                placeholder="Enter address"
                className="form-control !text-black"
              />
            </div>

            <div className="flex justify-center gap-4 mt-6">
              <button
                onClick={handleSave}
                className="bg-green-600 hover:bg-green-700 cursor-pointer text-white px-4 py-2 rounded-lg"
              >
                Save Changes
              </button>
              <button
                onClick={() => setEditUser(null)}
                className="bg-gray-400 hover:bg-gray-500 cursor-pointer text-white px-4 py-2 rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Customers;
