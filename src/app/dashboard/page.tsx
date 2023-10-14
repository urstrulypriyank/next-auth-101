"use client";
import React from "react";
import { signOut } from "next-auth/react";
type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex min-h-screen w-screen justify-center items-center">
      <div className="p-14 shadow-lg rounded-lg bg-blue-200">
        <h1>user info</h1>
        <div>name: </div>
        <div>email: </div>
        <button
          className="flex px-6 py-2 bg-red-400 text-blue-900"
          onClick={() => signOut()}
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default page;
