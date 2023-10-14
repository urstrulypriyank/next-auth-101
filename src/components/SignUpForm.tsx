"use client";
import React, { useState } from "react";
import Link from "next/link";
import ErrorToast from "./ErrorToast";
type Props = {};

const SignUpForm = (props: Props) => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // start of functions
  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    if (!fullname || !password || !email) setError("All Fields are compulsory");
    const res = await fetch("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fullname: fullname,
        email: email,
        password: password,
      }),
    });
  };

  return (
    <div className="grid place-items-center h-screen bg-blue-400 ">
      <div className="md:p-14 p-4 py-8 rounded-md text-center  flex flex-col mx-auto space-y-4 [&>*]:rounded-md [&>input]:p-2 [&>input]:outline-none [&>input]:text-black shadow-2xl bg-blend-color-dodge bg-blue-500  border-t-0 border-white md:w-[30%] [&>input]:placeholder:font-bold">
        <h1 className="text-3xl font-bold">SignIn</h1>
        {error && <ErrorToast message={error} />}
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter Full Name"
          onChange={(e) => setFullname(e.target.value)}
        />
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
          onClick={(e) => handleSubmit(e)}
          className="bg-blue-700 text-white px-4 py-2"
        >
          SignIn
        </button>
        <Link
          className="text-center  text-sm border border-white"
          href={"/login"}
        >
          Already have an account <span className="underline">Login</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUpForm;
