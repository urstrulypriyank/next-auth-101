import React from "react";

type Props = {};

const LoginForm = (props: Props) => {
  return (
    <div className="grid place-items-center h-screen bg-blue-400 ">
      <div className="md:p-14 p-4 py-8 rounded-md text-center  flex flex-col mx-auto space-y-4 [&>*]:rounded-md [&>input]:p-2 [&>input]:outline-none [&>input]:text-black shadow-2xl bg-blend-color-dodge bg-blue-500 border-t-4 border-white">
        <h1 className="text-3xl font-bold">Login</h1>
        <input type="email" name="email" id="" placeholder="Enter Email" />{" "}
        <input
          type="password"
          name="email"
          id=""
          placeholder="Enter Password"
        />{" "}
        <button className="bg-blue-700 text-white px-4 py-2">Login</button>
      </div>
    </div>
  );
};

export default LoginForm;
