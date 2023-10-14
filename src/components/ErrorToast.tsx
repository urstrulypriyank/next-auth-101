import React from "react";

type Props = {
  message: String;
};

const ErrorToast = (props: Props) => {
  return (
    <div className="bg-red-600 text-center px-4 py-2 space-x-2">
      <span>💣</span>
      <span className="font-bold ">{props.message}</span>
    </div>
  );
};

export default ErrorToast;
