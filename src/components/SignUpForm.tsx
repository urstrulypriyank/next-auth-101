import React from "react";
import Link from "next/link";
type Props = {};

const SignUpForm = (props: Props) => {
  return (
    <div className="grid place-items-center h-screen bg-blue-400 ">
      <div className="md:p-14 p-4 py-8 rounded-md text-center  flex flex-col mx-auto space-y-4 [&>*]:rounded-md [&>input]:p-2 [&>input]:outline-none [&>input]:text-black shadow-2xl bg-blend-color-dodge bg-blue-500 border-t-4 border-white">
        <h1 className="text-3xl font-bold">SignIn</h1>
        <input
          type="text"
          name="fullname"
          id="fullname"
          placeholder="Enter Full Name"
        />
        <input type="email" name="email" id="email" placeholder="Enter Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter Password"
        />
        <button className="bg-blue-700 text-white px-4 py-2">SignIn</button>
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
