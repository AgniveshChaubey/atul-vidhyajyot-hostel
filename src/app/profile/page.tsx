"use client";

import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProfilePage = () => {
  const [data, setData] = useState();
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      console.log("Logged out successfully");
      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log("Logout failed!", error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const response = await axios.get("/api/users/me");
    console.log(response.data);
    setData(response.data.data._id);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />

      <p>ProfilePage</p>
      <hr />
      <h2>
        {data ? <Link href={`/profile/${data}`}>{data}</Link> : "no data available!"}
      </h2>
      <button
        onClick={logout}
        className="bg-blue-500 mt-4 hover:bg-blue-700
      text-white font-bold py-2 px-4 rounded"
      >
        Logout
      </button>

      <button
        onClick={getUserDetails}
        className="bg-green-500 mt-4 hover:bg-green-700
      text-white font-bold py-2 px-4 rounded"
      >
        Get user details
      </button>
    </div>
  );
};

export default ProfilePage;
