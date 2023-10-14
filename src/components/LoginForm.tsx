"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
type Props = {};

const LoginForm = (props: Props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (res.ok) router.push("/");
  };
  return (
    <div className="grid place-items-center h-screen bg-blue-400 ">
      <div className="md:p-14 p-4 py-8 rounded-md text-center  flex flex-col mx-auto space-y-4 [&>*]:rounded-md [&>input]:p-2 [&>input]:outline-none [&>input]:text-black shadow-2xl bg-blend-color-dodge bg-blue-500 border-t-4 border-white">
        <h1 className="text-3xl font-bold">Login</h1>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-blue-700 text-white px-4 py-2"
          onClick={handleClick}
        >
          Login
        </button>
        <Link
          className="text-center  text-sm border border-white"
          href={"/signin"}
        >
          Don&apos;t have an account <span className="underline">Register</span>
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
